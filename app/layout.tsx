import type { Metadata } from "next";
import { Inter, Crete_Round, Work_Sans } from "next/font/google";
import "./globals.css";
import { ChildProps } from "@/types";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });
const creteRound = Crete_Round({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-creteRound',
})

const workSans = Work_Sans({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-workSans'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://shokh-blog.ac'),
  title: "Nur blog",
  description: "Dasturlash haqida yangiliklar, maslahatlar va dasturlash sohasidagi eng so'nggi xabarlar. Bizning blogda dasturlashni o'rganish va rivojlantirish uchun qo'llanma topishingiz mumkin.",
  authors:[{name: 'Nuriddinov Shokhrukh', url:'https://shokh-blog.ac'}],
  icons: {icon: '/favicon.png'},
  keywords: "nuriddinov shokhrukh, shokh,  dasturlashga oid bloglar, reactjs uzbek tilida, vuejs uzbek tilida, redux uzbek tilida, bepul dasturlash, rezyume yozish, portfolio, javascript, reactjs, vuejs, javascript darslari, reactjs darslari, vuejs darslari, dasturlash darslari, o'zbek tilida dasturlash, reactjs o'zbek tilida, reactjs darslari o'zbek tilida, javascript darslari, javascript darslari o'zbek tilida, dasturash darslari o'zbek tilida, dasturlashni o'rganish, dasturlash, IT loyihalar o'zbek tilida",
  openGraph: {
		title: 'Nur blog',
		description:
			'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
		type: 'website',
		url: 'https://shokh-blog.ac',
		locale: 'en_EN',
		images: 'https://media.graphassets.com/kXL006lyRnW46IKTHdHs',
		countryName: 'Uzbekistan',
		siteName: 'Shokh',
		emails: 'shokhrukhnuriddinov@gmail.com',
  }
};

function RootLayout({children} : ChildProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${creteRound.variable} ${workSans.variable} overflow-x-hidden`}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
          <NextTopLoader showSpinner={false}/>
          {children}
        <Toaster position="top-center"/>
        </ThemeProvider>
        </body>
    </html>
  );
}


export default RootLayout