import remarkA11yEmoji from '@fec/remark-a11y-emoji';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

import { MdxComponents } from '@shared/components/MDX/MdxComponents';

export default function MDXRenderer({ content }: { content: string }) {
  return (
    <MDXRemote
      source={content}
      components={MdxComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkA11yEmoji, remarkBreaks],
          rehypePlugins: [
            [
              rehypePrettyCode,
              { theme: { dark: 'github-dark-dimmed', light: 'github-light' } },
            ],
            rehypeSlug,
          ],
        },
      }}
    />
  );
}
