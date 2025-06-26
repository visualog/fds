import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export const metadata = {
  title: "Dialog Example",
};

export default function DialogExamplePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 space-y-6">
      <h1 className="text-3xl font-bold">Dialog (Modal) 예제</h1>
      <Dialog>
        <DialogTrigger asChild>
          <Button>모달 열기</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>샘플 다이얼로그</DialogTitle>
            <DialogDescription>
              이 모달은 새로 추가된 Dialog 컴포넌트를 보여줍니다.
            </DialogDescription>
          </DialogHeader>
          <p className="mb-4">원하는 내용을 자유롭게 넣을 수 있습니다.</p>
          <DialogFooter>
            <Button variant="secondary" asChild>
              <DialogTrigger>닫기</DialogTrigger>
            </Button>
            <Button>확인</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
