'use client'

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { H1, H2, H3, P, Blockquote, List, InlineCode } from "@/components/ui/typography"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Calendar } from "@/components/ui/calendar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { CalendarIcon, Check, ChevronsUpDown, Info, Loader2, Mail, Plus } from "lucide-react"

export default function ComponentsPage() {
  const showToast = () => {
    toast({
      title: "토스트 알림",
      description: "이것은 토스트 알림입니다.",
      action: <ToastAction altText="닫기">닫기</ToastAction>,
    })
  }

  return (
    <div className="container py-10">
      <H1 className="mb-6">Shadcn UI 컴포넌트</H1>
      
      <Tabs defaultValue="basic" className="mb-10">
        <TabsList className="grid grid-cols-2 md:grid-cols-6">
          <TabsTrigger value="basic">기본 컴포넌트</TabsTrigger>
          <TabsTrigger value="form">폼 컴포넌트</TabsTrigger>
          <TabsTrigger value="layout">레이아웃 컴포넌트</TabsTrigger>
          <TabsTrigger value="navigation">네비게이션</TabsTrigger>
          <TabsTrigger value="advanced">고급 컴포넌트</TabsTrigger>
          <TabsTrigger value="typography">타이포그래피</TabsTrigger>
        </TabsList>
        
        <TabsContent value="basic" className="space-y-8 mt-6">
          <section>
            <H2>버튼 (Button)</H2>
            <div className="flex flex-wrap gap-4 mt-4">
              <Button variant="default">기본</Button>
              <Button variant="destructive">삭제</Button>
              <Button variant="outline">아웃라인</Button>
              <Button variant="secondary">보조</Button>
              <Button variant="ghost">고스트</Button>
              <Button variant="link">링크</Button>
            </div>
          </section>
          
          <Separator />
          
          <section>
            <H2>배지 (Badge)</H2>
            <div className="flex flex-wrap gap-4 mt-4">
              <Badge>기본</Badge>
              <Badge variant="secondary">보조</Badge>
              <Badge variant="destructive">삭제</Badge>
              <Badge variant="outline">아웃라인</Badge>
            </div>
          </section>
          
          <Separator />
          
          <section>
            <H2>아바타 (Avatar)</H2>
            <div className="flex flex-wrap gap-4 mt-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </section>
          
          <Separator />
          
          <section>
            <H2>다이얼로그 (Dialog)</H2>
            <div className="mt-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>다이얼로그 열기</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>다이얼로그 제목</DialogTitle>
                    <DialogDescription>
                      다이얼로그 설명 텍스트입니다. 여기에 내용을 작성하세요.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    다이얼로그 내용이 들어갑니다.
                  </div>
                  <DialogFooter>
                    <Button>확인</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </section>
          
          <Separator />
          
          <section>
            <H2>아코디언 (Accordion)</H2>
            <div className="mt-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>아코디언 항목 1</AccordionTrigger>
                  <AccordionContent>
                    아코디언 내용 1입니다. 여기에 내용을 작성하세요.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>아코디언 항목 2</AccordionTrigger>
                  <AccordionContent>
                    아코디언 내용 2입니다. 여기에 내용을 작성하세요.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
          
          <Separator />
          
          <section>
            <H2>호버 카드 (Hover Card)</H2>
            <div className="mt-4">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link">@shadcn</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@shadcn</h4>
                      <p className="text-sm">
                        UI 컴포넌트 개발자
                      </p>
                      <div className="flex items-center pt-2">
                        <span className="text-xs text-muted-foreground">
                          shadcn.com
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </section>
          
          <Separator />
          
          <section>
            <H2>툴팁 (Tooltip)</H2>
            <div className="mt-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">툴팁 보기</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>툴팁 내용입니다.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </section>
          
          <Separator />
          
          <section>
            <H2>프로그레스 (Progress)</H2>
            <div className="mt-4">
              <Progress value={60} className="w-full" />
            </div>
          </section>
          
          <Separator />
          
          <section>
            <H2>스켈레톤 (Skeleton)</H2>
            <div className="mt-4 flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </section>
        </TabsContent>
        
        <TabsContent value="form" className="space-y-8 mt-6">
          <section>
            <H2>입력 (Input)</H2>
            <div className="mt-4 grid gap-4">
              <Input placeholder="기본 입력" />
              <Input placeholder="비활성화" disabled />
              <div className="flex w-full items-center space-x-2">
                <Input placeholder="버튼과 함께" />
                <Button type="submit">검색</Button>
              </div>
            </div>
          </section>
          
          <Separator />
          
          <section>
            <H2>텍스트에어리어 (Textarea)</H2>
            <div className="mt-4">
              <Textarea placeholder="여기에 내용을 입력하세요." />
            </div>
          </section>
          
          <Separator />
          
          <section>
            <H2>체크박스 (Checkbox)</H2>
            <div className="mt-4 flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">이용약관에 동의합니다</Label>
            </div>
          </section>
          
          <Separator />
          
          <section>
            <H2>라디오 그룹 (Radio Group)</H2>
            <div className="mt-4">
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">옵션 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">옵션 2</Label>
                </div>
              </RadioGroup>
            </div>
          </section>
          
          <Separator />
          
          <section>
            <H2>셀렉트 (Select)</H2>
            <div className="mt-4">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="테마 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">라이트</SelectItem>
                  <SelectItem value="dark">다크</SelectItem>
                  <SelectItem value="system">시스템</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </section>
          
          <Separator />
          
          <section>
            <H2>스위치 (Switch)</H2>
            <div className="mt-4 flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">비행기 모드</Label>
            </div>
          </section>
          
          <Separator />
          
          <section>
            <H2>슬라이더 (Slider)</H2>
            <div className="mt-4">
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
          </section>
        </TabsContent>
        
        <TabsContent value="layout" className="space-y-8 mt-6">
          <section>
            <H2>카드 (Card)</H2>
            <div className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>카드 제목</CardTitle>
                  <CardDescription>카드 설명</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>카드 내용이 들어갑니다.</p>
                </CardContent>
                <CardFooter>
                  <Button>저장</Button>
                </CardFooter>
              </Card>
            </div>
          </section>
          
          <Separator />
          
          <section>
            <H2>팝오버 (Popover)</H2>
            <div className="mt-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">팝오버 열기</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">크기</h4>
                      <p className="text-sm text-muted-foreground">
                        원하는 크기를 설정하세요.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 gap-2">
                        <Button variant="outline">S</Button>
                        <Button variant="outline">M</Button>
                        <Button variant="outline">L</Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </section>
          
          <Separator />
          
          <section>
            <H2>스크롤 영역 (Scroll Area)</H2>
            <div className="mt-4 border rounded-md">
              <ScrollArea className="h-[200px] w-full p-4">
                <div className="space-y-4">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="text-sm">
                      스크롤 내용 항목 {i + 1}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </section>
          
          <Separator />
          
          <section>
            <H2>테이블 (Table)</H2>
            <div className="mt-4">
              <Table>
                <TableCaption>최근 거래 내역</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>거래 ID</TableHead>
                    <TableHead>금액</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead className="text-right">날짜</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>INV001</TableCell>
                    <TableCell>₩50,000</TableCell>
                    <TableCell>완료</TableCell>
                    <TableCell className="text-right">2023-01-01</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>INV002</TableCell>
                    <TableCell>₩25,000</TableCell>
                    <TableCell>대기중</TableCell>
                    <TableCell className="text-right">2023-01-02</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>
          
          <Separator />
          
          <section>
            <H2>구분선 (Separator)</H2>
            <div className="mt-4">
              <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">라디오</h4>
                <p className="text-sm text-muted-foreground">
                  음악을 들으세요.
                </p>
              </div>
              <Separator className="my-4" />
              <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">팟캐스트</h4>
                <p className="text-sm text-muted-foreground">
                  팟캐스트를 들으세요.
                </p>
              </div>
            </div>
          </section>
        </TabsContent>
        
        <TabsContent value="navigation" className="space-y-8 mt-6">
          <section>
            <H2>메뉴바 (Menubar)</H2>
            <Menubar className="mt-4">
              <MenubarMenu>
                <MenubarTrigger>파일</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>새로 만들기</MenubarItem>
                  <MenubarItem>열기</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>편집</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>실행 취소</MenubarItem>
                  <MenubarItem>다시 실행</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </section>

          <Separator />

          <section>
            <H2>네비게이션 메뉴 (Navigation Menu)</H2>
            <NavigationMenu className="mt-4">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>제품</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[200px] lg:w-[300px]">
                      <li>
                        <NavigationMenuLink className="block rounded-md p-2 hover:bg-muted">제품 1</NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink className="block rounded-md p-2 hover:bg-muted">제품 2</NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="p-2" href="#">문서</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </section>

          <Separator />

          <section>
            <H2>페이지네이션 (Pagination)</H2>
            <Pagination className="mt-4">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </section>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-8 mt-6">
          <section>
            <H2>컨텍스트 메뉴 (Context Menu)</H2>
            <ContextMenu>
              <ContextMenuTrigger asChild>
                <Button variant="outline" className="mt-4">우클릭</Button>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>프로필</ContextMenuItem>
                <ContextMenuItem>설정</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </section>

          <Separator />

          <section>
            <H2>드롭다운 메뉴 (Dropdown Menu)</H2>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="mt-4">메뉴 열기</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>항목 1</DropdownMenuItem>
                <DropdownMenuItem>항목 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </section>

          <Separator />

          <section>
            <H2>시트 (Sheet)</H2>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="mt-4">시트 열기</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>시트 제목</SheetTitle>
                  <SheetDescription>시트 설명</SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </section>

          <Separator />

          <section>
            <H2>드로어 (Drawer)</H2>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" className="mt-4">드로어 열기</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>드로어 제목</DrawerTitle>
                  <DrawerDescription>드로어 설명</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">닫기</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </section>

          <Separator />

          <section>
            <H2>콜랩시블 (Collapsible)</H2>
            <Collapsible>
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="mt-4">토글</Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2">
                <p>숨겨진 내용입니다.</p>
              </CollapsibleContent>
            </Collapsible>
          </section>

          <Separator />

          <section>
            <H2>토글 그룹 (Toggle Group)</H2>
            <ToggleGroup type="multiple" className="mt-4">
              <ToggleGroupItem value="bold" aria-label="Bold">
                B
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Italic">
                I
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Underline">
                U
              </ToggleGroupItem>
            </ToggleGroup>
          </section>

          <Separator />

          <section>
            <H2>캘린더 (Calendar)</H2>
            <div className="mt-4">
              <Calendar mode="single" selected={new Date()} onSelect={() => {}} />
            </div>
          </section>

          <Separator />

          <section>
            <H2>Input OTP</H2>
            <div className="mt-4">
              <InputOTP maxLength={4}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </section>

          <Separator />

          <section>
            <H2>캐러셀 (Carousel)</H2>
            <Carousel className="w-full max-w-sm mt-4">
              <CarouselContent>
                {Array.from({ length: 3 }).map((_, i) => (
                  <CarouselItem key={i} className="p-1">
                    <div className="flex h-40 items-center justify-center rounded-md bg-muted">{i + 1}</div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </section>

          <Separator />

          <section>
            <H2>리사이저블 (Resizable)</H2>
            <ResizablePanelGroup direction="horizontal" className="mt-4 rounded-lg border">
              <ResizablePanel defaultSize={50} className="p-4">
                패널 1
                <ResizableHandle />
              </ResizablePanel>
              <ResizablePanel defaultSize={50} className="p-4">
                패널 2
              </ResizablePanel>
            </ResizablePanelGroup>
          </section>

          <Separator />

          <section>
            <H2>알림 (Alert)</H2>
            <Alert variant="default" className="mt-4">
              <Info className="h-4 w-4" />
              <AlertTitle>주의!</AlertTitle>
              <AlertDescription>알림 내용입니다.</AlertDescription>
            </Alert>
          </section>

          <Separator />

          <section>
            <H2>알림 다이얼로그 (Alert Dialog)</H2>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="mt-4">삭제</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>삭제하시겠습니까?</AlertDialogTitle>
                  <AlertDialogDescription>이 작업은 되돌릴 수 없습니다.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>취소</AlertDialogCancel>
                  <AlertDialogAction>확인</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </section>

          <Separator />

          <section>
            <H2>토스트 (Toast)</H2>
            <Button className="mt-4" onClick={showToast}>토스트 보기</Button>
          </section>
        </TabsContent>

        <TabsContent value="typography" className="space-y-8 mt-6">
          <section>
            <H2>타이포그래피 (Typography)</H2>
            <div className="mt-4 space-y-4">
              <H1>제목 1 (H1)</H1>
              <H2>제목 2 (H2)</H2>
              <H3>제목 3 (H3)</H3>
              <P>
                일반 텍스트 (P). Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, 
                vitae aliquam nisl nunc eu nisl.
              </P>
              <Blockquote>
                인용문 (Blockquote). Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Blockquote>
              <List>
                <li>목록 항목 1</li>
                <li>목록 항목 2</li>
                <li>목록 항목 3</li>
              </List>
              <P>
                인라인 코드: <InlineCode>const example = "hello world";</InlineCode>
              </P>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  )
}