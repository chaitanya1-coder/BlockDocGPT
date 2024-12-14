import './globals.css';

export const metadata = {
  title: 'BlockDocGPT Interface',
  description: 'A modern BlockDocGPT interface built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}