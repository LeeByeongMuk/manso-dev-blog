import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

const POSTS_DIR = path.join(process.cwd(), 'src/posts');

async function getCategories(dir: string): Promise<string[]> {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    const categories = entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name.toLowerCase());

    return categories.length > 0 ? categories : ['etc'];
  } catch {
    return ['etc'];
  }
}

export async function GET() {
  try {
    const allCategories = await getCategories(POSTS_DIR);

    return NextResponse.json(allCategories);
  } catch {
    return NextResponse.json(
      { error: 'Failed to load categories' },
      { status: 500 }
    );
  }
}
