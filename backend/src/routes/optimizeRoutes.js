import { Router } from "express";
import db from "../services/db.js";
import { scrapeAmazonProduct } from "../services/scrapeAmazon.js";
import { optimizeProduct } from "../services/aiOptimize.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { asin } = req.body;

    const original = await scrapeAmazonProduct(asin);
    const optimized = await optimizeProduct(original);

    // Save to SQLite
    const stmt = db.prepare(`
        INSERT INTO optimizations 
        (asin, original_title, original_bullets, original_description,
         optimized_title, optimized_bullets, optimized_description, keywords)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run(
      asin,
      original.title,
      JSON.stringify(original.bullets),
      original.description,
      optimized.title,
      JSON.stringify(optimized.bullets),
      optimized.description,
      JSON.stringify(optimized.keywords)
    );

    res.json({
      original,
      optimized
    });

  } catch (err) {
    console.error("OPTIMIZATION ERROR:", err);
    res.status(500).json({ error: "Failed to optimize listing" });
  }
});

export default router;
