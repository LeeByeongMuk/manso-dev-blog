import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const BASE_PATH = 'src/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export type PostMatter = {
  title: string;
  date: string;
  thumbnail: string;
  description?: string;
  tags?: string[];
  category?: string;
};

export type Post = PostMatter & {
  url: string;
  slug: string;
  dateString: string;
  content: string;
  readingMinutes: number;
};

export class PostFactory {
  static create(postPath: string): Post {
    const postAbstract = this.parsePostAbstract(postPath);
    const postDetail = this.parsePostDetail(postPath);
    return { ...postAbstract, ...postDetail };
  }

  static createList(postPaths: string[]): Post[] {
    return postPaths.map(postPath => this.create(postPath));
  }

  private static parsePostAbstract(
    postPath: string
  ): Pick<Post, 'url' | 'slug' | 'category'> {
    const relativePath = path
      .relative(POSTS_PATH, postPath)
      .replace('.mdx', '');
    const [category, slug] = relativePath.split(path.sep);
    const url = `/blog/${category}/${slug}`;
    return { url, slug, category };
  }

  private static parsePostDetail(
    postPath: string
  ): Omit<Post, 'url' | 'slug' | 'category'> {
    const file = fs.readFileSync(postPath, 'utf8');
    const { data, content } = matter(file);
    const grayMatter = data as PostMatter;

    if (!grayMatter.title || !grayMatter.date || !grayMatter.thumbnail) {
      throw new Error(`MDX 파일의 필수 필드가 누락되었습니다: ${postPath}`);
    }

    const formattedDate = new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(grayMatter.date));

    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readingMinutes = Math.ceil(wordCount / wordsPerMinute);

    return {
      ...grayMatter,
      dateString: formattedDate,
      content,
      readingMinutes,
    };
  }
}
