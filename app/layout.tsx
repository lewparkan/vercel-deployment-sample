import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "hello. | Hello, World!",
  description: "Hello, World! Try a greeting in six languages.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
