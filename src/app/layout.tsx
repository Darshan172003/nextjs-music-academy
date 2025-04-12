import Navbar from "@/components/Navbar";
import "./globals.css";



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
        {children}
      </body>
    </html>
  );
}
