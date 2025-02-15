import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

import { PostFactory } from '@lib/posts/postFactory';

export const POSTS_DIR = path.join(process.cwd(), 'src/posts');

async function getMdxFiles(dir: string): Promise<string[]> {
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

export async function GET() {
  try {
    const mdxFiles = await getMdxFiles(POSTS_DIR);
    const posts = PostFactory.createList(mdxFiles);

    const allCategories = Array.from(
      new Set(posts.map(post => post.category?.toLowerCase() ?? 'etc'))
    );

    return NextResponse.json({
      categories: allCategories,
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to load categories' },
      { status: 500 }
    );
  }
}
