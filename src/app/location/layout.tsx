export default function LocationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-24">{children}</div>
  );
}
