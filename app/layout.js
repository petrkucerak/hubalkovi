import "./globals.css";

export const metadata = {
  title: "Hubálkovi",
  description: "Budeme se brát!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
