import path from 'path';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? '';

export const POSTS_DIR = path.join(process.cwd(), 'src/posts');
