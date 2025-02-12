import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

import { PostFactory } from '@lib/posts/postFactory';

const POSTS_DIR = path.join(process.cwd(), 'src/posts');

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

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryQuery = searchParams.get('category');

    const mdxFiles = await getMdxFiles(POSTS_DIR);
    const posts = PostFactory.createList(mdxFiles);

    const allCategories = Array.from(
      new Set(posts.map(post => post.category ?? 'etc'))
    );

    console.log(posts);

    let filteredPosts = posts;
    if (categoryQuery && categoryQuery.trim().toLowerCase() !== 'all') {
      filteredPosts = posts.filter(
        post =>
          post.category?.toLowerCase() === categoryQuery.trim().toLowerCase()
      );
    }

    return NextResponse.json({
      posts: filteredPosts,
      categories: allCategories,
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to load posts' },
      { status: 500 }
    );
  }
}
