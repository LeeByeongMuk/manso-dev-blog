import { NextResponse } from 'next/server';

import { POSTS_DIR } from '@lib/api/constants.server';
import { getMdxFiles } from '@lib/api/utils.server';
import { PostFactory } from '@lib/posts/postFactory';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryQuery = searchParams.get('category');

    const mdxFiles = await getMdxFiles(POSTS_DIR);
    const posts = PostFactory.createList(mdxFiles);

    const allCategories = Array.from(
      new Set(posts.map(post => post.category ?? 'etc'))
    );

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
