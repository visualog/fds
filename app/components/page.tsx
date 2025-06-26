"use client";

import React from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Toggle } from "@/components/ui/toggle"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Toast, ToastTitle, ToastDescription, ToastAction, ToastClose } from "@/components/ui/toast"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { InfoIcon, AlertCircleIcon, CheckCircleIcon } from "lucide-react"

export default function ComponentsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full">
        <h1 className="text-4xl font-bold mb-8">컴포넌트</h1>
        <p className="text-xl mb-12">
          shadcn UI를 활용한 디자인 시스템 컴포넌트 목록입니다.
        </p>
        
        <div className="space-y-12">
          {/* 버튼 섹션 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">버튼</h2>
            <p className="text-gray-500">다양한 스타일의 버튼 컴포넌트입니다.</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">기본</Button>
              <Button variant="secondary">보조</Button>
              <Button variant="outline">외곽선</Button>
              <Button variant="ghost">고스트</Button>
              <Button variant="link">링크</Button>
              <Button variant="destructive">삭제</Button>
            </div>
          </section>
          
          {/* 입력창 섹션 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">입력창</h2>
            <p className="text-gray-500">사용자 입력을 받는 컴포넌트입니다.</p>
            <div className="flex flex-col gap-4 max-w-sm">
              <Input placeholder="이름을 입력하세요" />
              <Input placeholder="이메일을 입력하세요" type="email" />
            </div>
          </section>
          
          {/* 카드 섹션 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">카드</h2>
            <p className="text-gray-500">정보를 구조화하여 보여주는 카드 컴포넌트입니다.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>카드 제목</CardTitle>
                  <CardDescription>카드에 대한 설명입니다.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>카드 내용이 여기에 들어갑니다.</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">취소</Button>
                  <Button>확인</Button>
                </CardFooter>
              </Card>
            </div>
          </section>
          
          {/* 체크박스 섹션 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">체크박스</h2>
            <p className="text-gray-500">사용자 선택을 위한 체크박스입니다.</p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  이용약관에 동의합니다
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="marketing" />
                <label htmlFor="marketing" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  마케팅 정보 수신에 동의합니다
                </label>
              </div>
            </div>
          </section>
          
          {/* 셀렉트 섹션 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">셀렉트</h2>
            <p className="text-gray-500">옵션 선택을 위한 드롭다운 컴포넌트입니다.</p>
            <div className="max-w-sm">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="테마 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>테마</SelectLabel>
                    <SelectItem value="light">라이트 모드</SelectItem>
                    <SelectItem value="dark">다크 모드</SelectItem>
                    <SelectItem value="system">시스템 설정</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </section>
          
          {/* 토글 섹션 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">토글</h2>
            <p className="text-gray-500">상태를 전환할 수 있는 토글 버튼입니다.</p>
            <div className="flex flex-wrap gap-4">
              <Toggle>기본 토글</Toggle>
              <Toggle pressed>활성화 토글</Toggle>
              <Toggle variant="outline">외곽선 토글</Toggle>
            </div>
          </section>
          
          {/* 모달 / 다이얼로그 섹션 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">모달 / 다이얼로그</h2>
            <p className="text-gray-500">중요 정보를 보여주는 모달 창입니다.</p>
            <Dialog>
              <DialogTrigger asChild>
                <Button>모달 열기</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>다이얼로그 제목</DialogTitle>
                  <DialogDescription>모달 내용이 여기에 표시됩니다.</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="secondary" asChild>
                    <DialogTrigger>닫기</DialogTrigger>
                  </Button>
                  <Button>확인</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </section>

          {/* 알림 / 토스트 섹션 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">알림 / 토스트</h2>
            <p className="text-gray-500">화면 상단에 잠깐 표시되는 알림 메시지입니다.</p>
            {(() => {
              const [open, setOpen] = React.useState(false);
              return (
                <>
                  <Button onClick={() => setOpen(true)}>토스트 표시</Button>
                  <Toast open={open} onOpenChange={setOpen}>
                    <ToastTitle>알림</ToastTitle>
                    <ToastDescription>작업이 완료되었습니다.</ToastDescription>
                    <ToastAction altText="확인">확인</ToastAction>
                    <ToastClose />
                  </Toast>
                </>
              );
            })()}
          </section>

          {/* Progress 섹션 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">프로그레스바 (Progress)</h2>
            <p className="text-gray-500">진행 상태나 완료된 작업의 비율을 표시합니다.</p>
            <div className="space-y-4 max-w-lg">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>진행중 (25%)</span>
                  <span>25%</span>
                </div>
                <Progress value={25} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>진행중 (50%)</span>
                  <span>50%</span>
                </div>
                <Progress value={50} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>진행중 (75%)</span>
                  <span>75%</span>
                </div>
                <Progress value={75} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>완료 (100%)</span>
                  <span>100%</span>
                </div>
                <Progress value={100} />
              </div>
            </div>
          </section>

          {/* Avatar 섹션 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">아바타 (Avatar)</h2>
            <p className="text-gray-500">사용자 프로필 이미지를 표시하는 컴포넌트입니다.</p>
            <div className="flex flex-wrap gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/visualog.png" alt="@visualog" />
                <AvatarFallback>VL</AvatarFallback>
              </Avatar>
              <Avatar className="bg-blue-500">
                <AvatarFallback className="text-white">JD</AvatarFallback>
              </Avatar>
              <Avatar className="bg-green-500">
                <AvatarFallback className="text-white">KM</AvatarFallback>
              </Avatar>
            </div>
          </section>

          {/* Badge 섹션 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">배지 (Badge)</h2>
            <p className="text-gray-500">상태나 카테고리를 표시하는 작은 라벨입니다.</p>
            <div className="flex flex-wrap gap-2">
              <Badge>기본</Badge>
              <Badge variant="secondary">보조</Badge>
              <Badge variant="outline">아웃라인</Badge>
              <Badge variant="destructive">삭제</Badge>
              <Badge variant="success">성공</Badge>
            </div>
          </section>

          {/* Alert 섹션 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">알림 (Alert)</h2>
            <p className="text-gray-500">사용자에게 중요한 정보를 알리는 컴포넌트입니다.</p>
            <div className="space-y-4 max-w-lg">
              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>기본 알림</AlertTitle>
                <AlertDescription>
                  중요한 정보를 알려드립니다. 이 알림은 읽어보시고 확인해주세요.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircleIcon className="h-4 w-4" />
                <AlertTitle>오류</AlertTitle>
                <AlertDescription>
                  작업 중 문제가 발생했습니다. 다시 시도해주세요.
                </AlertDescription>
              </Alert>
              <Alert variant="success">
                <CheckCircleIcon className="h-4 w-4" />
                <AlertTitle>성공</AlertTitle>
                <AlertDescription>
                  작업이 성공적으로 완료되었습니다.
                </AlertDescription>
              </Alert>
            </div>
          </section>

          {/* 탭 섹션 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">탭</h2>
            <p className="text-gray-500">다양한 콘텐츠를 탭 형태로 구분하여 보여줍니다.</p>
            <div className="max-w-lg">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">개요</TabsTrigger>
                  <TabsTrigger value="features">기능</TabsTrigger>
                  <TabsTrigger value="specifications">상세 사항</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="p-4 border rounded-md mt-2">
                  <h3 className="text-lg font-medium">제품 개요</h3>
                  <p className="mt-2">최신 기술과 세련된 디자인을 결합한 플래그십 제품입니다. 고급 소재로 제작되어 타협 없는 성능과 신뢰성을 제공합니다.</p>
                </TabsContent>
                <TabsContent value="features" className="p-4 border rounded-md mt-2">
                  <h3 className="text-lg font-medium">주요 기능</h3>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>고급 처리 기능</li>
                    <li>직관적인 사용자 인터페이스</li>
                    <li>초보자와 전문가 모두를 위한 설계</li>
                  </ul>
                </TabsContent>
                <TabsContent value="specifications" className="p-4 border rounded-md mt-2">
                  <h3 className="text-lg font-medium">상세 사항</h3>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <div>사이즈:</div>
                    <div>10 x 20 x 5 cm</div>
                    <div>무게:</div>
                    <div>250g</div>
                    <div>색상:</div>
                    <div>블랙, 화이트, 블루</div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* 아코디언 섹션 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">아코디언</h2>
            <p className="text-gray-500">접었다 펼칠 수 있는 콘텐츠 영역입니다.</p>
            <div className="max-w-lg">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>아코디언 제목 1</AccordionTrigger>
                  <AccordionContent>
                    아코디언 내용이 여기에 표시됩니다. 접었다 펼칠 수 있는 영역으로 많은 내용을 효율적으로 보여줄 수 있습니다.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>아코디언 제목 2</AccordionTrigger>
                  <AccordionContent>
                    두 번째 아코디언 내용입니다. 사용자가 클릭하면 이 영역이 펼쳐집니다.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
