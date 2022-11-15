import Footer from "@components/Footer";
import Nav from "@components/Nav";
import Sidebar from "@components/Sidebar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head />
      <body className="bg-background">
        <Nav />
        <div className="relative max-w-[1232px] my-0 mx-auto py-0 px-5 flex justify-center h-full">
          <Sidebar />
          <div className="w-full min-h-full">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
