export const metadata = {
  title: "AVENORA | Make Good Possible",
  description: "A global crowdfunding platform bringing people together."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}