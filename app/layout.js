import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./provider";

const red_hat_display = Red_Hat_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Sprint Earn",
  description: "Unlock your path to financial independence today. Become financially independent with Sprint Earn. Our 6-week program helps you create and grow a reliable income source.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={red_hat_display.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
