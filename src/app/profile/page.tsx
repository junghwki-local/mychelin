export default function ProfilePage() {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-10 bg-background border-b border-border px-4 py-3">
        <h2 className="font-bold text-lg">프로필</h2>
      </header>
      <div className="flex items-center justify-center h-40 text-muted text-sm">
        로그인 후 이용할 수 있어요
      </div>
    </div>
  );
}
