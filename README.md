# **ManSo.dev Blog**
🚀 **Next.js 14 + React + TypeScript 기반 블로그**  
📖 MDX 기반 게시글 관리  
🌙 다크모드 지원  
⚡️ ShadCN UI 적용

---

## 🛠 **기술 스택**
- **프레임워크**: [Next.js 14](https://nextjs.org/)
- **프론트엔드**: [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **스타일링**: [Tailwind CSS](https://tailwindcss.com/), [ShadCN UI](https://ui.shadcn.com/)
- **데이터 관리**: [React Query](https://tanstack.com/query)
- **Markdown**: [MDX](https://mdxjs.com/)
- **빌드 & 배포**: [Vercel](https://vercel.com/)
- **테스트**: Jest, React Testing Library

---

## 🚀 **설치 및 실행 방법**
```bash
# 1. 프로젝트 클론
git clone https://github.com/LeeByeongMuk/manso-dev-blog.git

# 2. 프로젝트 폴더 이동
cd manso-dev-blog

# 3. 패키지 설치
npm install

# 4. 로컬 개발 서버 실행
npm run dev
```
서버 실행 후 `http://localhost:3000`에서 확인할 수 있습니다.

---

## 📂 **프로젝트 구조**
```bash
📦 src
 ┣ 📂 app               # Next.js App Router 기반 페이지
 ┃ ┣ 📂 (domain)        # 도메인별 페이지 관리
 ┃ ┣ 📂 (home)          # 홈 화면
 ┃ ┣ 📂 blog            # 블로그 게시글 관련 페이지
 ┃ ┣ 📂 api             # API 라우트
 ┃ ┗ 📂 layout          # 페이지 레이아웃
 ┣ 📂 shared            # 공용 UI 및 컴포넌트
 ┣ 📂 lib               # 유틸리티 및 API 관련 코드
 ┣ 📂 hooks             # 커스텀 훅
 ┣ 📂 posts             # MDX 기반 게시글 저장
 ┣ 📂 styles            # 글로벌 스타일 (Tailwind 설정 포함)
 ┗ 📜 README.md         # 프로젝트 설명 파일
```

---

## 🛠 **빌드 & 배포**
```bash
# 프로젝트 빌드
npm run build

# 로컬 서버 실행
npm start
```

배포는 **Vercel**을 사용하며, PR 생성 시 Preview 배포가 자동 실행됩니다.
