import { NextRequest, NextResponse } from 'next/server';

// 기본적으로 전체 페이지에서 실행
export function middleware(request: NextRequest) {
  // redirect사용 예시
  if (request.nextUrl.pathname.startsWith('/products/1004')) {
    return NextResponse.redirect(new URL('/products', request.url));
  }
}

// matcher 옵션을 이용하여 특정 경로에서만 middleware가 동작하도록 설정
export const config = {
  matcher: ['/products/:path*'], // products 경로 밑으로 전부 실행
};
