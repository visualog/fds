import Link from "next/link"

export default function DocsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full">
        <h1 className="text-4xl font-bold mb-8">문서</h1>
        <p className="text-xl mb-12">
          Shadcn 디자인 시스템의 구성과 사용 방법에 대한 가이드입니다.
        </p>
        
        <div className="space-y-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Shadcn UI와 Radix UI의 관계</h2>
            <div className="prose max-w-none">
              <p>
                Shadcn UI는 Radix UI를 기반으로 만들어진 컴포넌트 라이브러리입니다. 
                두 라이브러리의 관계와 특징을 이해하면 디자인 시스템을 더욱 효과적으로 활용할 수 있습니다.
              </p>
              
              <h3 className="text-xl font-semibold mt-6">Radix UI</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>접근성 중심:</strong> 모든 컴포넌트는 WAI-ARIA 표준을 준수하여 접근성이 우수합니다.
                </li>
                <li>
                  <strong>무스타일 컴포넌트:</strong> 기본적으로 스타일이 없어 개발자가 원하는 디자인을 자유롭게 적용할 수 있습니다.
                </li>
                <li>
                  <strong>복잡한 상태 관리:</strong> 드롭다운, 모달 등의 복잡한 UI 상태를 내부적으로 관리합니다.
                </li>
                <li>
                  <strong>키보드 인터랙션:</strong> 키보드 네비게이션과 다양한 인터랙션 패턴을 지원합니다.
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6">Shadcn UI</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Radix UI + Tailwind CSS:</strong> Radix UI의 기능성에 Tailwind CSS로 스타일링을 더한 조합입니다.
                </li>
                <li>
                  <strong>복사-붙여넣기 방식:</strong> npm 패키지가 아니라 컴포넌트 코드를 직접 프로젝트에 복사하여 사용합니다.
                </li>
                <li>
                  <strong>커스터마이징 용이:</strong> 컴포넌트 코드를 직접 소유하므로 프로젝트 요구사항에 맞게 자유롭게 수정할 수 있습니다.
                </li>
                <li>
                  <strong>디자인 시스템 구축:</strong> Tailwind의 설정 파일을 통해 일관된 디자인 시스템을 구축할 수 있습니다.
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6">적용 및 개선 절차</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <strong>컴포넌트 설치:</strong> shadcn-ui CLI를 통해 필요한 컴포넌트를 프로젝트에 추가합니다.
                </li>
                <li>
                  <strong>Tailwind 설정:</strong> 피그마 디자인 토큰을 tailwind.config.js에 매핑합니다.
                </li>
                <li>
                  <strong>컴포넌트 커스터마이징:</strong> 프로젝트 요구사항과 디자인 가이드에 맞게 컴포넌트를 수정합니다.
                </li>
                <li>
                  <strong>상태 스타일링:</strong> hover, active 등 다양한 상태에 대한 스타일을 일관되게 적용합니다.
                </li>
                <li>
                  <strong>문서화:</strong> Storybook 등을 통해 컴포넌트 사용법과 변형을 문서화합니다.
                </li>
              </ol>
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">스타일 가이드</h2>
            <p className="text-gray-500">디자인 시스템의 색상, 타이포그래피, 간격 등에 대한 가이드입니다.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">색상</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-12 rounded bg-primary"></div>
                    <span>primary</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-12 rounded bg-secondary"></div>
                    <span>secondary</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-12 rounded bg-muted"></div>
                    <span>muted</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">타이포그래피</h3>
                <div className="space-y-2">
                  <p className="text-4xl font-bold">제목 1</p>
                  <p className="text-3xl font-bold">제목 2</p>
                  <p className="text-2xl font-semibold">제목 3</p>
                  <p className="text-xl">본문 텍스트</p>
                  <p className="text-sm">작은 텍스트</p>
                </div>
              </div>
            </div>
          </section>
          
          <div className="mt-8">
            <Link 
              href="/components" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 active:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              컴포넌트 보기
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
