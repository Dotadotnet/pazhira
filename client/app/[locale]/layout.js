
import Layout from "@/components/layout/Layout";
import "../globals.css";
import { ThemeProvider } from "@/components/Theme/context";
import { CartProvider } from "@/components/cart/context";
import { HashProvider } from "@/utilities/hashContext";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import language from "../language";
import { routing } from "@/i18n/routing";

export const metadata = {
  title: "محصولات غذایی بهانه",
  description: "بهانه برند تجاری صنایع غذایی آماده پز با تولید رب گوجه فرنگی، مربا، ترشیجات، شوریجات، کنسرو و تن ماهی در سفره ها قرارگرفته است",
};


export default async function RootLayout({ children , params }) {
   const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const class_language = new language(locale);
  const lang = class_language.getInfo();
  return (
    <html className={` ${lang.dir} ${lang.lang}`} lang={lang.lang + "-" + lang.loc} dir={lang.dir}>
      <head>
        <link rel="icon" href="/favicon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  try {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.classList.add(theme);
    } else {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.add(isDark ? 'dark' : 'light');
    }
} catch (e) {}})();
            `,
          }}
        />
      </head>
      <body  >
              <div className="h-28 md:h-36"></div>
        <NextIntlClientProvider>
          <HashProvider>
            <CartProvider>
              <ThemeProvider>
                <Layout>
                  {children}
                </Layout>
              </ThemeProvider>
            </CartProvider>
          </HashProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}