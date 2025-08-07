import type { Metadata } from "next";
import "./globals.css";
import "../app/Styles/reset.css";
import { Headers } from "./Component/headers";
import { Footer } from "./Component/footer";



export const metadata: Metadata = {
  title: "Axisium Technology Solutions",
  description: "Leading technology solutions provider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicons/favicon.ico" />
      
      </head>     
 
  
      <body style={{fontFamily: 'General Sans, sans-serif'}}>
        <Headers />
          {children}
        <Footer />
      </body>
    </html>
  );
}
