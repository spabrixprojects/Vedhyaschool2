// scripts/convert-to-webp.mjs
// Run with: node scripts/convert-to-webp.mjs
import sharp from "sharp";
import { readdir } from "fs/promises";
import { join, extname, basename } from "path";

const PUBLIC_DIR = "./public";
const QUALITY = 85;

const SUPPORTED = [".png", ".jpg", ".jpeg"];

async function convertAll() {
  const files = await readdir(PUBLIC_DIR);
  const toConvert = files.filter((f) => SUPPORTED.includes(extname(f).toLowerCase()));

  console.log(`Found ${toConvert.length} images to convert...`);

  for (const file of toConvert) {
    const inputPath = join(PUBLIC_DIR, file);
    const outputName = basename(file, extname(file)) + ".webp";
    const outputPath = join(PUBLIC_DIR, outputName);

    // Skip if already a webp with same name
    if (extname(file).toLowerCase() === ".webp") continue;

    try {
      const info = await sharp(inputPath)
        .webp({ quality: QUALITY, effort: 6 })
        .toFile(outputPath);

      const origStat = (await import("fs")).default.statSync(inputPath);
      const saved = ((1 - info.size / origStat.size) * 100).toFixed(1);
      console.log(`✅ ${file} → ${outputName}  (${(origStat.size / 1024).toFixed(0)}KB → ${(info.size / 1024).toFixed(0)}KB, saved ${saved}%)`);
    } catch (err) {
      console.error(`❌ Failed: ${file}`, err.message);
    }
  }

  console.log("\nDone! Update your component image paths from .png/.jpg → .webp");
}

convertAll();
