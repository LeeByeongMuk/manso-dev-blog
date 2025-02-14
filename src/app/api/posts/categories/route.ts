import { NextResponse } from 'next/server';

import { POSTS_DIR } from '@lib/api/constants';
import { getMdxFiles } from '@lib/api/utils';
import { PostFactory } from '@lib/posts/postFactory';

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
