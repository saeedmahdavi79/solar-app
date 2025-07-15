import FooterApp from "./components/layout/Footer";
import HeaderApp from "./components/layout/Header";
import "./globals.css";

export const metadata = {
  title: "سامانه انتخاب پمپ سولار پمپ",
  description: "سامانه انتخاب پمپ سولار پمپ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-ir" dir="rtl">
      <body className={`w-full bg-white `}>
        <div className="w-full">
          <HeaderApp />
        </div>
        <div className=" container mx-auto">{children}</div>
        <div className="w-full">
          <FooterApp />
        </div>
      </body>
    </html>
  );
}
