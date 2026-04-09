"use client";

import { motion } from "framer-motion";

const logos = [
  "Ashley Furniture",
  "Home Depot",
  "Wayfair",
  "IKEA",
  "Pottery Barn",
  "City Furniture",
  "Bob's Furniture",
  "Rooms To Go",
];

export default function LogoTicker() {
  return (
    <div className="overflow-hidden py-4">
      <motion.div
        className="flex gap-12 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...logos, ...logos].map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex-shrink-0 text-gray-400 font-semibold text-sm tracking-wider uppercase whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity"
          >
            {name}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
