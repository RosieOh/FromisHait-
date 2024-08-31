// app/layout.tsx
import './globals.css';
import Header from './components/header/header';

export const metadata = {
  title: 'Fromis_9 Fanpage',
  description: 'A fanpage dedicated to Fromis_9',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <footer className="bg-gray-800 text-white p-4 mt-8 text-center">
          <p>© 2024 Fromis_9 Fanpage. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
