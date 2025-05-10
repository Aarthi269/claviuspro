export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Hello, <span className="text-white font-bold">Mikołaj</span> 👋</h1>
      <input type="search" placeholder="Search..." className="p-2 rounded bg-gray-800 border border-gray-700" />
    </div>
  );
}
