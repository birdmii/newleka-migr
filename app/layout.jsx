"use client";
import { useRouter } from 'next/navigation';
import Footer from "@components/Footer";
import Nav from "@components/Nav";
import Sidebar from "@components/Sidebar";
import { useState } from "react";
import "./globals.css";

export default function RootLayout({ children }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleQuerySubmit =(e) => {
    e.preventDefault();
    router.push(`/search?q=${query}`);
  }

  return (
    <html lang="ko">
      <head />
      <body className="bg-background">
        <Nav handleQuery={handleQuery} handleQuerySubmit={handleQuerySubmit} />
        <div className="relative max-w-[1232px] my-0 mx-auto py-0 px-5 flex justify-center h-full">
          <Sidebar />
          <div className="w-full min-h-screen">{children}</div>
        </div>
        <Footer />
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
