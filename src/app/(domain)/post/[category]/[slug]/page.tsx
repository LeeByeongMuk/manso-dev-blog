import dynamic from 'next/dynamic';

const PostDetailContainer = dynamic(
  () => import('@domains/post/detail/_components/PostDetailContainer'),
  {
    ssr: false,
  }
);

export default function PostDetailPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <PostDetailContainer />

      {/*<AuthorCard />*/}
    </section>
  );
}
