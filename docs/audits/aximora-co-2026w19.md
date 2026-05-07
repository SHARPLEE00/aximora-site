# aximora.co · 现状盘点 (W19 / 2026-05-07)

> Audit author: 小克 · Source-of-truth commit: `d8ad9902` (main, last pushed 2026-04-09)
> Live URL: https://www.aximora.co · Repo: https://github.com/SHARPLEE00/aximora-site

## TL;DR

aximora.co 是 Aximora Global Trading 的对外门面，定位 **Vietnam Sourcing Partner**（帮美国买家在越南采购家具/农产品）。目前**站点已上线 Vercel 并由 R2 CDN 供视频**，6 个静态页 + 2 篇 blog 已 prerender、SEO meta 齐全，但仓库自 2026-04-09 后**无任何提交**（4 周静默），且存在 3 个生产级阻断问题：

1. **Contact 表单不会发送**——`<form>` 没有 action / onSubmit / API route，所有 lead 直接落地。
2. **WhatsApp 号码是 `wa.me/84XXXXXXXXX` 占位符**——首页/Footer/浮动按钮 3 处都是假号。
3. **240MB Wrangler R2 dev cache 误提交进 git**（`.wrangler/state/v3/r2/aximora-videos/blobs/` 下 20 个 ~12MB blob），导致 clone 极慢、远超 GitHub 推荐仓库大小。

其余技术栈、SEO、部署链路都健康，建议在合并本 audit 后立刻起一个 hotfix PR 修上面三项。

---

## 1. 技术栈

| 层 | 选型 | 版本 |
|---|---|---|
| Framework | Next.js (App Router, Turbopack) | **16.2.3** |
| Runtime | React | 19.2.4 |
| Language | TypeScript | ^5（strict, ES2017 target, bundler resolution） |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`) | ^4 |
| Animation | Framer Motion | ^12.38 |
| Smooth scroll | `@studio-freight/lenis` | ^1.0 |
| Icons | `lucide-react` | ^1.8 |
| Blog 内容 | `gray-matter` 解析 `/content/blog/*.md` | ^4.0.3 |
| Lint | ESLint 9 + `eslint-config-next` (core-web-vitals + ts) | flat config |
| Tests | `playwright` 装在 devDeps，但**仓库无 e2e 用例**（grep 不到 `*.spec.ts`） | ^1.59 |
| Hosting | **Vercel**（响应头 `server: Vercel` / `x-vercel-cache: HIT` / `x-nextjs-prerender: 1`） | — |
| Video CDN | **Cloudflare R2** 公开 bucket `pub-0a641e7a81224930bb61e8e561977175.r2.dev` | — |

仓库根有 `AGENTS.md` + `CLAUDE.md`（后者只是 `@AGENTS.md` 一行），提醒所有 agent 该用 Next.js 16 文档而不是训练数据，写得好。`README.md` 仍是 `create-next-app` 默认 boilerplate，没换。

`next.config.ts` 只设置了 `turbopack.root`，无图像优化白名单、无 i18n、无 redirects/rewrites。说明 R2 视频是直接 `<video src>` 而不是走 `next/image`。

---

## 2. 路由清单

`gh api .../git/trees/main?recursive=1` 解出的 App Router 路由：

| 路径 | 来源文件 | 类型 | 行数 | 备注 |
|---|---|---|---|---|
| `/` | `src/app/page.tsx` | static | 470 | 6 幕电影叙事，引用 13 个 `/videos/*.mp4` |
| `/services` | `src/app/services/page.tsx` | static | ~190 | 4 个 service 卡片 |
| `/industries` | `src/app/industries/page.tsx` | static | ~200 | 家具 / 坚果咖啡 / 纺织 |
| `/about` | `src/app/about/page.tsx` | static | ~210 | HCMC 故事 + 数据卡 |
| `/contact` | `src/app/contact/page.tsx` | static | ~210 | **表单未连后端** |
| `/blog` | `src/app/blog/page.tsx` | static | ~80 | 列表，从 `content/blog/*.md` 读 |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | dynamic-static | ~120 | 当前 2 篇文章 |
| `/sitemap.xml` | `src/app/sitemap.ts` | metadata route | — | **硬编码 6 条，未包含 blog 文章 URL** |
| `/robots.txt` | `src/app/robots.ts` | metadata route | — | `Disallow: /api/`、`sitemap` 指向 https://aximora.co |
| `/api/*` | — | **不存在** | — | 任意 `/api/*` 路径返回 404 |

`src/components/` 下 18 个组件，全部围绕动画/视频背景 UX：`VideoBackground`, `Reveal`, `WordReveal`, `LineReveal`, `HeroReveal`, `RotatingText`, `CustomCursor`, `SmoothScroll`, `MagneticButton`, `ParallaxSection`, `ScrollProgress`, `LogoTicker`, `GradientBlob`, `HorizontalScroll`, `Navbar`, `Footer`, `WhatsAppButton`, `AnimatedSection`, `TextReveal`, `CountUp`。

`src/lib/blog.ts` 走 `fs.readFileSync` + `gray-matter`；`src/lib/cdn.ts` 把 `/videos/...` 重写到 R2 base URL（`process.env.NEXT_PUBLIC_CDN_URL` 优先，fallback 到硬编码的 `pub-0a641e7a8...r2.dev`）。

### Blog 现有文章

- `how-to-source-furniture-from-vietnam` (2026-04-10, 12 min)
- `vietnam-vs-china-manufacturing-cost` (2026-04-08, 8 min)

---

## 3. 依赖

`package.json` runtime deps 9 个，dev deps 9 个，**整体 lean**——没有冗余 UI 库、没有 CMS SDK、没有 analytics SDK（GA / Mixpanel / Vercel Analytics 全部缺席）。

风险点：
- `lucide-react@^1.8.0` —— **版本号可疑**，主流 lucide-react 当前在 v0.x（2026 年 5 月稳定版仍是 0.4xx 号段）。需要确认这是不是装错了私有 fork 或拼写问题；建议手动 `npm view lucide-react versions` 核对。
- `playwright` 装了 dev dep 但仓库里无 spec 文件 → 要么补 e2e、要么从 deps 删掉。
- `next 16.2.3` + `react 19.2.4` 都是当前最新主线，OK。

---

## 4. 上次部署 / Vercel 状态

仅凭公网响应头推断（无 Vercel API token 验证）：

| 信号 | 值 |
|---|---|
| `server` | Vercel |
| `x-vercel-cache` | HIT（首页 `/`、`/services` 等都命中边缘缓存） |
| `x-nextjs-prerender` | 1（所有 6 页静态预渲染） |
| `x-vercel-id` | `iad1::...`（apex 入口）/ `sfo1::...`（_next 静态资源） |
| 首页 `age` | `2365079s` ≈ **27.4 天**前生成 → 与 `pushed_at = 2026-04-09T20:12:28Z` 完全吻合，说明从 2026-04-09 起就没新部署了 |
| 静态资源 `cache-control` | `public, max-age=31536000, immutable`（1 年） |
| `strict-transport-security` | `max-age=63072000`（HSTS 2 年）✓ |

**域名/路由**：apex `https://aximora.co/` 307 redirect 到 `https://www.aximora.co/`（Vercel 自动 redirect）。Sitemap & og:url 都填的 apex `https://aximora.co`，与实际 canonical（www.）不一致——SEO 上有轻微规范化风险但 Google 一般会自动合并。

**仓库管线**：`.github/workflows/` 不存在，`actions/workflows` API 返回 `total_count: 0` → 没有 GitHub Actions CI。所有部署都靠 Vercel git integration（push 即部署），目前 main 上 4 周没动，所以 prod 也 4 周未更新。

GitHub repo 元数据：created_at `2026-04-09T19:37:27Z`、last push `2026-04-09T20:12:28Z`、共 **3 个 commit**（`Initial commit from Create Next App` → `Aximora v2: cinematic redesign with video backgrounds` → `Switch videos to Cloudflare R2 CDN`），无开放 PR / 无 issue。

---

## 5. SEO meta

抓取 `https://www.aximora.co/` 实际 HTML：

| 项目 | 状态 | 实际值 |
|---|---|---|
| `<title>` | ✓ | `Aximora — Vietnam Sourcing Partner`（layout 里设了 `template: "%s — Aximora"`，子页面如 `Services — Aximora`、`Contact — Aximora` 都正确） |
| `meta description` | ✓ | 每页独立 |
| `meta keywords` | ⚠️ | `Vietnam sourcing,Vietnam factory,Vietnam furniture manufacturer,sourcing agent Vietnam`（继承自 layout，所有页面共用，没区分） |
| `og:title` / `og:description` / `og:url` / `og:site_name` / `og:locale` / `og:type` | ✓ | 完整 |
| `og:image` | **❌ 缺失** | 没有任何 OG 图片 → Twitter / WhatsApp / Slack 分享会出空白预览 |
| `twitter:card` | ✓ | `summary`（如果加了 og:image 应升级为 `summary_large_image`） |
| `twitter:title` / `twitter:description` | ✓ | — |
| `twitter:image` | ❌ | 同 og:image 缺 |
| `<link rel="canonical">` | **❌ 缺失** | layout 没设 `metadataBase` + `alternates.canonical`，apex/www 容易被搜索引擎当成两个 URL |
| `<link rel="icon">` | ✓ | `/favicon.ico`（实际是 25KB，疑似 png 改名 ico，可接受但非标准） |
| Apple touch icon / manifest | ❌ | 无 |
| JSON-LD `Organization` schema | ✓ | layout 内嵌，含 `addressLocality: HCMC` / `areaServed: [US, CA, AU, GB]` / `knowsLanguage: [en, vi, zh]` |
| `<meta name="botcheck">` (蜜罐) | ✓ | contact 页有 honeypot input，但没有提交逻辑去校验 |

---

## 6. sitemap.xml

`https://www.aximora.co/sitemap.xml` 200 OK，内容：

```xml
<urlset>
  https://aximora.co/                priority=1   changefreq=weekly
  https://aximora.co/services        priority=0.9 changefreq=monthly
  https://aximora.co/industries      priority=0.9 changefreq=monthly
  https://aximora.co/about           priority=0.8 changefreq=monthly
  https://aximora.co/contact         priority=0.8 changefreq=monthly
  https://aximora.co/blog            priority=0.7 changefreq=weekly
</urlset>
```

问题：
- 是**静态**生成的（`src/app/sitemap.ts` 里硬编码了 6 条），blog 列表页存在但 `/blog/how-to-source-furniture-from-vietnam` 与 `/blog/vietnam-vs-china-manufacturing-cost` **未包含进 sitemap**。
- 所有 `loc` 都是 apex `aximora.co` 而 canonical 是 `www.aximora.co` → 同上规范化问题。
- `lastmod` 写的 `new Date()` —— 每次构建都是构建时间，而非内容真实修改时间。

`/robots.txt` 200 OK：`User-Agent: *` allow `/`、disallow `/api/`、`Sitemap: https://aximora.co/sitemap.xml`，符合预期。

---

## 7. 红线问题（需要在下一个 hotfix PR 处理）

按优先级：

### 🔴 P0 — Contact 表单完全不会提交
`src/app/contact/page.tsx:42` 的 `<form className="space-y-8">` **既没有 `action`、也没有 `onSubmit`、也没对应的 API route**。点 "Send Inquiry" 按钮不会发任何请求。所有当前 lead 直接掉地。修复方向：
- 加 `app/api/contact/route.ts`（POST）→ 转 Resend / Formspree / 自建 webhook，或
- 把 `<form>` 改成 server action `<form action={submitInquiry}>`，server action 里转邮件。

考虑到集团已经有 Resend 在用（OXIVUE 生态栈），建议复用。

### 🔴 P0 — WhatsApp 号是占位符
3 处出现 `wa.me/84XXXXXXXXX`：`src/app/page.tsx`（hero CTA）、`src/components/Footer.tsx`、`src/components/WhatsAppButton.tsx`（浮动绿球）。点了会跳到一个无效号码页。需要替换成真实越南号。建议把号码抽到环境变量 `NEXT_PUBLIC_WHATSAPP_E164`。

### 🔴 P0 — 240MB Wrangler R2 dev cache 进了 git
仓库里包含：

```
.wrangler/state/v3/r2/aximora-videos/blobs/
  ├─ 20 个 ~12MB binary blob（视频 R2 缓存）
.wrangler/state/v3/r2/miniflare-R2BucketObject/  (sqlite + WAL)
.wrangler/state/v3/cache/miniflare-CacheObject/  (sqlite + WAL)
```

合计 ~240MB，全部是本地 `wrangler dev` 时模拟 R2 留下的副本。`.gitignore` 里没有 `.wrangler/`。后果：
- GitHub 报告 repo size = 244 MB，远超 100 MB "推荐" 阈值。
- `git clone` 在多种网络环境下 hang（本次 audit 期间多次 fetch-pack early EOF）。
- Vercel 拉取 / 构建拖慢。
- 历史里也有这些 blob，无法靠新 commit 删除——需要 `git filter-repo` / BFG 清理。

最小补救（不重写历史，立即生效）：把 `.wrangler/` 加进 `.gitignore`、`git rm -r --cached .wrangler` 提交。但 git 历史里的 ~120MB 仍会被 clone，需要后续单独安排一次 history rewrite + force push（**这是破坏性操作，需创始人签字**）。

### 🟡 P1 — README 还是 create-next-app 默认
`README.md` 还是模板的 "First, run the development server" 那段，没说明这个 repo 是什么、域名是哪、如何部署、env 怎么配（`NEXT_PUBLIC_CDN_URL` 等）。

### 🟡 P1 — 缺 OG image / canonical / metadataBase
- 没 og:image，社交分享掉链接预览。
- `layout.tsx` 没 `metadataBase: new URL("https://www.aximora.co")` + `alternates.canonical`，apex/www 可能被双收录。
- 顺手加一张 1200×630 的 OG（建议复用 hero 视频截帧 + "Aximora — Vietnam Sourcing Partner"）。

### 🟡 P1 — sitemap 漏 blog 文章
`src/app/sitemap.ts` 应该 `import { getAllPosts } from "@/lib/blog"` 然后展开 `/blog/${slug}`。否则新 blog 文章永远进不了搜索引擎。

### 🟡 P2 — 杂项
- `lucide-react@^1.8.0` 版本号可疑，应核对成 0.x 主线（如 `^0.469.0`）。
- `og:url` / sitemap `loc` 都用 apex `aximora.co`，建议统一成 canonical `www.aximora.co`。
- `content/blog/how-to-source-furniture-from-vietnam.md` **末尾被截断**（"based in Ho Chi Min" 后没了），需要确认作者是否 commit 了截断版本。
- `playwright` 是 dev dep 但无 spec —— 要么补 e2e（推荐：smoke test 6 个路由 + contact form），要么从 deps 删。
- `Footer.tsx` 暴露 `mailto:sharp@aximora.co` —— 创始人邮箱直接挂网上，会被爬虫扫，建议改成 `hello@aximora.co` 或表单收。
- 没接任何 analytics（Vercel Analytics 是免费的、一行启用），lead 漏斗当前完全不可观测。

---

## 8. 不打算改的（按 issue 红线）

- **代码 0 改动**：本 PR 仅新增 `docs/audits/aximora-co-2026w19.md`。
- **env 0 暴露**：本文档不引用任何 secret / token。R2 的 `pub-0a641e...r2.dev` 是该 bucket 的 public URL，存在源代码里且本来就公开。

---

## 9. 建议的下一步（创始人决定排序）

| # | 动作 | 影响 | 谁 |
|---|---|---|---|
| 1 | hotfix PR：Contact API + 真 WhatsApp 号 + `.wrangler/` 进 .gitignore + `git rm -r --cached .wrangler` | 让 lead 真正能进来 | 小克 |
| 2 | metadataBase + canonical + og:image + sitemap 含 blog | SEO 健康度 | 小克 |
| 3 | 接 Vercel Analytics + Resend lead 通知 | 漏斗可观测 | 小克 |
| 4 | git history 重写、删掉 240MB blob | clone/CI 速度 | 小克（需创始人签字） |
| 5 | brand-brief.md 起草（AXM-11） | 内容定位对齐 | 小文 |
| 6 | 补 3-5 篇 blog（家具 / 坚果 / 越南港口 / 关税案例） | 搜索流量 | 小媒 + 小研 |

---

## 修订日志

- **v0.1 (2026-05-07)** —— 小克 · 初版盘点。源数据：commit `d8ad9902` + 公网响应头 + GitHub API（trees / refs / commits / actions）。无 Vercel API token，部署细节靠 response header 推断。
