# Aximora Global Trading Brand Brief

> 状态：v0.1 DRAFT-UNREVIEWED · 待小克的 aximora.co 现状盘点（AXM-5）出 PR 后迭代为 v0.2，待创始人最终拍板。

## 1. 一句话定位

Vietnam Sourcing Partner — 海外 B2B 买家的"胡志明落地团队"，从工厂匹配、品控、生产监督到清关物流一手包办，让客户不用飞 20 小时也能在越南做供应链。

## 2. 主战场

- **首要市场**：美国（United States）。家具与农产品（腰果、胡椒）是越南对美出口的拳头品类，主页核心数据全部围绕美国买家叙事。
- **次要市场**：欧盟（受益于 EVFTA）、CPTPP 成员国（加、澳、日）。[推测] 早期不主动开拓。
- **运营总部**：越南胡志明市（HCMC），核心工厂走访半径覆盖 Bình Dương（家具）、Đồng Nai（家具 / 五金）、Long An（农产品 / 轻工）、Tây Ninh（腰果）。
- **不做战场**：D2C 零售（那是 OXIVUE/ElyNu 的战场）、东南亚域内分销（那是越南本土店的战场）。

## 3. 目标受众画像

主受众：**美国中型进口商 / 品牌方采购负责人**

- 年龄：35–55 岁
- 性别：以男性为主（采购岗位结构性偏向），但不排除女性买手 / 品类经理
- 职位 / 收入：采购总监 / 供应链 VP / 品牌创始人，年薪 USD 120k–300k；公司年采购额 USD 500k–20M
- 痛点：
  1. 中国关税成本上行，被动转 Vietnam，但**没有越南本地团队**
  2. 工厂目录太多，**不知道哪家真的能交货**（多数线上 directory 不可信）
  3. 飞越南成本高，**远程没人盯产线**容易被换料 / 跳单
  4. 语言文化壁垒：越南工厂业务多为 Chinese-owned（中文沟通）+ 越南文文档 + 英文合同
  5. 物流 / 清关链路复杂，FOB / CIF / DDP 不是每家工厂都能开
- 触媒习惯：
  - LinkedIn（决策者职场社交主战场）
  - Google 搜索（"vietnam furniture sourcing agent" / "vietnam quality control inspection" 等长尾关键词）
  - 行业展会：Vietnam Furniture & Handicraft Fair (VIFA)、HCMC Saigon Expo、Las Vegas Market、High Point Market
  - 行业邮件订阅：Furniture Today、Sourcing Journal、Cashew Week
  - 推荐信任链：existing buyer 转介绍

次受众：**北美电商品牌方**（Amazon FBA 卖家、DTC 品牌的私模供应链负责人）—— [推测] 客单价较低但量大，是中长期 inbound 流量的重要部分。

## 4. 平台栈

- **前端 / Web 应用**：Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + Framer Motion 12，TypeScript 全栈
- **媒体 CDN**：Cloudflare R2（视频资产，详见 commit `d8ad990`）
- **部署平台**：Cloudflare（仓库内有 `.wrangler/state` 目录，倾向 Cloudflare Pages / Workers）[推测 — 待 AXM-5 现状盘点确认]
- **域名**：aximora.co（主域），aximora.us 是集团母体 [推测]
- **内容**：`content/blog/*.md` + `gray-matter` 解析（当前 2 篇 SEO 长文）
- **表单 / 联系**：[推测] `/contact` 页面已存在，后端处理待 AXM-5 确认（疑似用 Cloudflare Workers / 第三方表单服务）
- **分析 / 监测**：[推测] 待补
- **协作 / 项目**：Multica（issue 与 audit 协作）、GitHub（SHARPLEE00/aximora-site）
- **不用**：Shopify（不卖货）、WordPress（已彻底迁移到 Next.js）

## 5. 主语言

- **对外文案语言**：英文（美式商务，主战场美国）。次：越南语（少量 trust 信号，例如团队页 / 工厂走访 caption）。
- **内部协作语言**：中文（创始人母语，跨境团队沟通主语言），关键合同与给客户文档英文。
- **不用**：繁体中文、日韩语 [推测，除非有日韩客户]

## 6. 当前阶段

**launching**

- aximora.co Next.js 16 重构刚切上线（commit `9348956` "Aximora v2: cinematic redesign with video backgrounds"，2026-W18）
- 视频资产已迁 Cloudflare R2
- 内容站 2 篇博客已上（furniture、Vietnam vs China cost）
- 客户漏斗 / lead form 已通但**尚未规模化投流**
- 下一步：SEO 内容矩阵扩量 + LinkedIn outbound + 老客户转介绍

## 7. 关键 KPI

按优先级排序，前 3 个是真正"动钱"的指标：

1. **Qualified leads / 月**：填了 contact form 且具备真实采购需求（具体品类 / MOQ / 时间线）的合格询盘。目标 v0：≥ 15 / 月（2026 Q3）。
2. **Quote-to-PO 转化率**：从 48h quote 报出 → 客户下首张 PO 的转化率。目标 v0：≥ 20%。
3. **GMV under management**：经 Aximora 撮合 + 监工的客户年度采购总额（USD）。目标 v0：年化 USD 5M（2026 末）。
4. 次要 KPI（看板用，不做 KPI 死指标）：
   - 站点 SEO 自然流量（aximora.co / month），关键词覆盖（"vietnam sourcing agent"、"vietnam furniture sourcing" 等）
   - LinkedIn 公司页 followers（trust 指标，非主战场）
   - Repeat-buyer 比率（second PO / total PO）
5. **取舍**：**不追虚荣指标**（pageview、blog 阅读数、社媒粉丝）。所有指标必须能映射到下一笔 PO。

## 8. 内容 / 文案语气

- **专业**（professional，B2B 决策语境，不能像 D2C 那样网感）
- **克制**（understated，cinematic redesign 的延续，黑底极细字 / 大量留白 / 视频铺底，不靠感叹号）
- **数据驱动**（data-backed，每一个论点都要给得出来源 —— USD 6.8B、89%、55% 这类美元 / 百分比是必带的）
- **现场感**（on-the-ground，"我们走访了"、"工厂离办公室 30 分钟"，强化"我们真的在那里"）
- **可信任**（trustworthy，不夸大、不画饼，验厂细节 / AQL 抽样 / 损坏率公开）

避免：营销话术、感叹号、"revolutionary / disruptive / world-class"、emoji、过度形容词。

## 9. 红线 / 不许做

继承 workspace context 红线，并叠加品牌专属：

- **不暴露客户身份**：客户名 / PO 金额 / 工厂报价**全部默认机密**，案例上线前必须客户书面同意。
- **不做未授权报价**：在没有走完 sourcing 流程前不给客户报"工厂价"。所有报价以正式 PI 为准。
- **不接灰产 / 制裁品类**：野生动物制品、违禁木材（受 CITES 管制的红木、黄花梨等）、军民两用、加密硬件、知识产权山寨品。
- **不做 D2C / 个人买家**：低于 USD 10k 的零散订单原则上劝退或导流到越南本土店渠道，不在 aximora.co 主漏斗承接。
- **不公开内部采购成本**：commission 模型可以讲，**具体 commission %、工厂底价**不在公开网页 / blog / LinkedIn 出现。
- **不发未经创始人授权的对外合作 / 价格新闻稿**。
- **不在 public repo 提交客户合同 / 报价单 / Bill of Lading / packing list**（含敏感商业信息），即使打了码也不行。
- **不用 AI 替代验厂**：所有"验厂报告"必须有真人到场签字，**禁止用纯 AI 生成的工厂照片 / 流水线视频冒充实拍**（这条是 brand survival 红线，一旦被买家发现等于品牌死亡）。
- **不和 OXIVUE / ElyNu / SolaGuard 共用同一对外文案**：B2B 与 D2C 文风必须严格分离，避免买家误以为我们也是终端品牌。

## 10. 关键术语词典

### 必用专业词

- **MOQ**（Minimum Order Quantity）— 最小起订量
- **OEM / ODM**（Original Equipment / Design Manufacturer）
- **FOB / CIF / DDP / EXW**（Incoterms 2020）
- **AQL** (Acceptable Quality Level) — 验货抽样标准
- **L/C, T/T, O/A**（信用证 / 电汇 / 赊销）
- **HS code**（海关协调编码）
- **CO / Form A / Form E**（原产地证）
- **CPTPP / EVFTA / RCEP**（自贸协定）

### 品牌词（拼写须严格统一）

- **Aximora**（首字母大写，A-X-I-M-O-R-A，禁止误拼为 Aximor / Axiomora / Eximora）
- **Aximora Global Trading**（法律名）
- **Aximora**（aximora.co 正式品牌名 —— 不要在文案中写"Aximora.co"，只在 URL 上下文出现）
- **HCMC** = Ho Chi Minh City（首次出现要全称，之后可缩）
- **Bình Dương / Đồng Nai / Long An / Tây Ninh**（保留越南语带音调拼写，不要简化为 Binh Duong）

### 避免词

- "Cheap Vietnam"、"low-cost factory"、"sweatshop"、"made-in-China alternative"（贬低越南或中国，触美国买家敏感神经）
- "Revolutionary / disruptive / world-class / best-in-class"（B2B 客户不吃营销话术）
- "Drop-shipping / dropship"（与本业混淆，这是越南本土店的事）
- "Marketplace / directory"（我们不是 Alibaba，要主动切割）
- "Agent"（**慎用**，"sourcing partner" 优于 "sourcing agent"，前者代表深度合作，后者廉价中介观感）
- "工厂直营 / 自有工厂"（**绝不能写**，我们是供应链服务方，不是制造商）

### 中英对照（创始人内部沟通用）

| 中文 | 英文文案 |
|---|---|
| 越南采购合伙人 | Vietnam Sourcing Partner |
| 工厂匹配 | Factory Sourcing & Matching |
| 验厂 | Factory Audit / Verification |
| 品控 / 验货 | Quality Control / Inspection |
| 生产跟单 | Production Monitoring |
| 装柜监装 | Container Loading Supervision |
| 现场团队 | On-the-ground Team |
| 三语团队 | Trilingual Team (EN / VI / ZH) |

---

# 修订日志

- **v0.1 — 2026-05-07** · 小文起草。基于以下来源：
  - 仓库 commit 历史（HEAD = `d8ad990`，最近 redesign `9348956`）
  - aximora-site 主页 / about / services / industries / contact 路由实拍内容
  - issue AXM-11 描述及 Multica 上下文中的"Aximora Trading 不是 D2C"约束
  - 集团蓝图 `aximora-governance/blueprints/company-blueprints-v1/05_Aximora_Global_Trading.md` **未读取**（仓库未在本工作目录下，按已知信息合理推断，所有未确认字段已标注 [推测]）
  - 小克的 aximora.co 现状盘点（AXM-5）**尚未出 PR**，本版按通用知识起草，待 audit 出来后迭代为 v0.2
  - **待 v0.2 校正点**：① 部署平台（Cloudflare Pages vs Workers vs 其他） ② contact form 后端 ③ 分析 / 监测栈 ④ 集团蓝图核对的对外可披露范围 ⑤ 真实 KPI 基线值（当前 LP / 月、quote-to-PO 历史转化率） ⑥ 是否纳入 ElyNu / SolaGuard 跨品牌引流策略
