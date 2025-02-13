import Image from 'next/image';

export default function AuthorCard() {
  return (
    <section className="my-8 flex items-center space-x-4 rounded-md border border-border bg-card p-4 dark:bg-card">
      <Image
        src="/avatar.png"
        alt="Author avatar"
        width={50}
        height={50}
        className="rounded-full"
      />

      <div>
        <h3 className="text-lg font-semibold">작성자 이름</h3>
        <p className="text-sm text-muted-foreground">간단한 소개 문구</p>
      </div>
    </section>
  );
}
