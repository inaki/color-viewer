import Link from 'next/link';

export default function Navbar({ className }) {
  return (
    <nav className={`bg-blue-600 p-4 shadow-md ${className}`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">Color Viewer</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/cards" className="text-white hover:underline">Cards</Link>
          </li>
          <li>
            <Link href="/graphs" className="text-white hover:underline">Graphs</Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:underline">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
