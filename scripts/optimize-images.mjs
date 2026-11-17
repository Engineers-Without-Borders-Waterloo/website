// Converts every .png/.jpg/.jpeg under public/images to a resized .webp.
// Run before committing new photos:
//
//   npm run optimize-images                        (keeps the originals)
//   npm run optimize-images -- --delete-originals  (removes them afterwards)
//
// Afterwards, point the matching data/*.ts entry at the new .webp path.
// The site is a static export (images.unoptimized), so Next.js can't resize
// images at request time — whatever is in public/ is what visitors download.

import { readdir, stat, unlink } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve('public/images');
const MAX_SIZE = 2000; // longest edge in px — plenty for full-width hero images
const QUALITY = 80;
const INPUT_EXT = new Set(['.png', '.jpg', '.jpeg']);
const DELETE_ORIGINALS = process.argv.includes('--delete-originals');

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (INPUT_EXT.has(path.extname(entry.name).toLowerCase())) yield full;
  }
}

const kb = (bytes) => `${Math.round(bytes / 1024).toLocaleString()} KB`;

let before = 0;
let after = 0;
let count = 0;

for await (const file of walk(ROOT)) {
  const out = file.replace(/\.(png|jpe?g)$/i, '.webp');
  const inSize = (await stat(file)).size;

  await sharp(file)
    .rotate() // respect EXIF orientation from phone/camera photos
    .resize(MAX_SIZE, MAX_SIZE, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(out);

  const outSize = (await stat(out)).size;
  if (DELETE_ORIGINALS) await unlink(file);

  before += inSize;
  after += outSize;
  count += 1;
  console.log(`${path.relative(ROOT, file)}: ${kb(inSize)} -> ${kb(outSize)}`);
}

if (count === 0) {
  console.log('No .png/.jpg/.jpeg files found in public/images — nothing to do.');
} else {
  console.log(`\n${count} images: ${kb(before)} -> ${kb(after)}`);
}
