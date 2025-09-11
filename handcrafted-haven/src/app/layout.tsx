import Header from "@/app/components/header";
import Footer from "@/app/components/footer"; 
import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="page-content">{children}</main>
        <Footer /> 
      </body>
    </html>
  );
}
