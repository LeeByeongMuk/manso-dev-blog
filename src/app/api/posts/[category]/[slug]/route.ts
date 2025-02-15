import { NextResponse } from 'next/server';

import { POSTS_DIR } from '@lib/api/constants.server';
import { getMdxFiles } from '@lib/api/utils.server';
import { PostFactory } from '@lib/posts/postFactory';

export async function GET(
  _: Request,
  { params }: { params: { category: string; slug: string } }
) {
  try {
    const { category, slug } = params;

    const mdxFiles = await getMdxFiles(POSTS_DIR);
    const posts = PostFactory.createList(mdxFiles);

    const post = posts.find(p => {
      return category === p.category && slug === p.slug;
    });

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch {
    return NextResponse.json({ error: 'Failed to load post' }, { status: 500 });
  }
}
