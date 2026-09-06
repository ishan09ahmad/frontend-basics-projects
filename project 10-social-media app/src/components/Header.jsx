import { Link } from "react-router";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6">
        <Link to="/" className="text-2xl font-extrabold tracking-tight text-gray-900">
          Social<span className="text-blue-600">Media</span>
        </Link>
      </div>
    </header>
  );
}