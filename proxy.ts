import { type NextRequest, NextResponse } from "next/server";

const locales = ["en", "es"];
const defaultLocale = "en";

function getPreferredLocale(_request: NextRequest): string {
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`,
  );

  if (hasLocale) return NextResponse.next();

  const locale = getPreferredLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
