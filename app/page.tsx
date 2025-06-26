import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Shadcn 디자인 시스템</h1>
        <p className="text-xl mb-8">
          피그마 디자인 시스템을 기반으로 한 컴포넌트 라이브러리입니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <Link 
            href="/docs" 
            className="p-4 border rounded-lg hover:bg-gray-700 active:bg-gray-600 transition-colors"
          >
            <h2 className="text-2xl font-bold">문서</h2>
            <p>디자인 시스템 사용 가이드와 문서를 확인하세요.</p>
          </Link>
          <Link 
            href="/components" 
            className="p-4 border rounded-lg hover:bg-gray-700 active:bg-gray-600 transition-colors"
          >
            <h2 className="text-2xl font-bold">컴포넌트</h2>
            <p>다양한 UI 컴포넌트를 살펴보세요.</p>
          </Link>
        </div>
      </div>
    </main>
  );
}