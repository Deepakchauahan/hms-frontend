
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import "./globals.css";

export const metadata = {
  title: "Akriti Dental",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header transparent={false}/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
