import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "FitLog_A06",
  description: "Workout Library and Workout Planning Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}