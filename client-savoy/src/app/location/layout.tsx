// app/about/layout.tsx
export default function LocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white  w-full min-h-screen">
      <main>{children}</main> {/* <== Di sini konten page.tsx masuk */}
    </div>
  );
}