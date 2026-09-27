import "./globals.css";

export const metadata = {
  title: "Köpük Lab | Car Care & Detailing",
  description: "Köpük Lab Car Care & Detailing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
