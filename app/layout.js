import "./globals.css";

export const metadata = {
  title: "FitLog_A06",
  description: "Workout Library and Workout Planning Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}