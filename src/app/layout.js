import "./globals.css";
import { StrictMode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

export const metadata = {
  title: "Kryptoapi || Next-Level Security for All Digital Assets",
  description: "Next-Level Security for All Digital Assets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StrictMode>
          {children}
          <ToastContainer />

        </StrictMode>
      </body>
    </html>
  );
}
