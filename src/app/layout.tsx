import type { Metadata } from 'next';
import '@/styles/globals.css';
import Provider from './provider';

export const metadata: Metadata = {
  title: 'Pokédocs',
  description: 'Pokédocs',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;
