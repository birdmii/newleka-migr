import Nav from "@components/Nav";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head />
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
