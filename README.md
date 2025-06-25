# Shadcn UI 디자인 시스템

Next.js, Tailwind CSS 및 Shadcn UI를 기반으로 구축된 디자인 시스템 프로젝트입니다.

## 소개

이 프로젝트는 피그마 디자인 시스템을 기반으로 Shadcn UI와 Tailwind CSS를 활용하여 개발된 디자인 시스템입니다. Storybook을 통해 컴포넌트와 디자인 가이드를 체계적으로 관리합니다.

## 기술 스택

- [Next.js](https://nextjs.org/) - React 프레임워크
- [Tailwind CSS](https://tailwindcss.com/) - 유틸리티 우선 CSS 프레임워크
- [Shadcn UI](https://ui.shadcn.com/) - 재사용 가능한 컴포넌트 라이브러리
- [Storybook](https://storybook.js.org/) - 컴포넌트 문서화 및 테스트 도구

## 시작하기

### 필수 조건

- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 방법

1. 저장소 클론:
   ```bash
   git clone https://github.com/visualog/fds.git
   cd fds
   ```

2. 의존성 설치:
   ```bash
   npm install
   ```

3. 개발 서버 실행:
   ```bash
   npm run dev
   ```
   
4. 브라우저에서 확인:
   - 메인 페이지: [http://localhost:3000](http://localhost:3000)
   - 로그인 폼 예제: [http://localhost:3000/examples/login-form](http://localhost:3000/examples/login-form)

### Storybook 실행

컴포넌트 라이브러리를 Storybook에서 확인하려면:

```bash
npm run storybook
```

Storybook은 기본적으로 [http://localhost:6006](http://localhost:6006)에서 실행됩니다.

## 프로젝트 구조

```
shadcn-design-system/
├── .storybook/         # Storybook 설정
├── app/                # Next.js 앱 디렉토리
│   ├── examples/       # 예제 페이지
│   └── ...
├── components/         # 컴포넌트 디렉토리
│   └── ui/            # UI 컴포넌트
│       ├── button.tsx
│       ├── input.tsx
│       └── ...
├── lib/                # 유틸리티 함수
└── stories/           # Storybook 스토리
```

## 컴포넌트

현재 구현된 컴포넌트:

- **Button** - 다양한 스타일과 사이즈의 버튼 컴포넌트
- **Input** - 폼 입력 필드 컴포넌트

## 예제

- **로그인 폼** - 버튼과 입력 필드를 활용한 로그인 폼 예제 (`/examples/login-form`)

## 기여 방법

1. 이 저장소를 포크합니다
2. 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다.

## 감사의 말

- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Next.js](https://nextjs.org/)
- [Storybook](https://storybook.js.org/)