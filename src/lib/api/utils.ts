'use server';

import { promises as fs } from 'fs';
import path from 'path';

export async function getMdxFiles(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async entry => {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        return await getMdxFiles(fullPath);
      } else if (entry.name.endsWith('.mdx')) {
        return fullPath;
      } else {
        return [];
      }
    })
  );
  return files.flat();
}
