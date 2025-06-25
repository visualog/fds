import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginFormExample() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-md space-y-8 p-8 border rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold">로그인</h1>
          <p className="text-sm text-gray-500 mt-2">
            계정에 로그인하여 서비스를 이용하세요
          </p>
        </div>
        
        <div className="mt-8 space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              이메일
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              비밀번호
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="********"
              required
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm">
                로그인 상태 유지
              </label>
            </div>
            
            <div className="text-sm">
              <Link href="#" className="text-primary hover:underline">
                비밀번호 찾기
              </Link>
            </div>
          </div>
          
          <div>
            <Button className="w-full">
              로그인
            </Button>
          </div>
          
          <div className="text-center text-sm">
            계정이 없으신가요?{" "}
            <Link href="#" className="text-primary hover:underline">
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}