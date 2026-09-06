import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate=useNavigate();
  const handleClick=()=>
  {
navigate("/")
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-gray-900">404</h1>

        <h2 className="mt-4 text-2xl font-bold text-gray-800">
          Page not found
        </h2>

        <p className="mt-2 text-gray-500">
          The page you're looking for doesn't exist.
        </p>

        <button
          onClick={handleClick}
          className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 cursor-pointer"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}