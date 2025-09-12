// src/app/layout.js
import "../styles/globals.css";
import NavBar from "../components/NavBar";

export const metadata = {
  title: "Billionaire Gang",
  description: "Billionaire Gang Nonprofit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
