import "../sass/global.scss";

export const metadata = {
  title: "Portfolio",
  description: "Personal portfolio site for VIS 327",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  );
}
