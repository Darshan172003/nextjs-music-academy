import Navbar from "@/components/Navbar";
import "./globals.css";
import { Toaster } from 'sonner';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body>
        <div className="relative w-full">
          <Navbar />
        </div>
        <Toaster position="top-right" richColors />
        {children}
      </body>
    </html>
  );
}
