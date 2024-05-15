import "../sass/global.scss";

import Header from "../components/Header";

export const metadata = {
  title: "Patrick Firrell - Portfolio",
  description: "Personal portfolio site for Patrick Firrell",
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
