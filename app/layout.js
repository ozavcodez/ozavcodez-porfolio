import { inter } from  '@/app/ui/fonts';
import "./globals.css";



export const metadata = {
  title: "My Portfolio",
  description: "Developed by Akande Ozavize",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#11071F] text-graywhite overflow-x-hidden `} >{children}</body>
    </html>
  );
}
