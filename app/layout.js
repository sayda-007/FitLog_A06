import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FitLogProvider } from "../context/FitLogContext";

export const metadata = {
  title: "FitLog_A06",
  description: "Workout Library and Workout Planning Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FitLogProvider>
          <Navbar/>
          {children}
           <Footer/>
        </FitLogProvider>
      </body>
    </html>
  );
}