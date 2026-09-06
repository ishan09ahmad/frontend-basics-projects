import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { fetchPosts } from "../feature/postsSlice";

export default function Home() {
  const posts = useSelector((state) => state.posts.posts);
  const error = useSelector((state) => state.posts.error);
  const loading = useSelector((state) => state.posts.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-gray-100 p-6 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 justify-items-center gap-8 min-[500px]:grid-cols-2 min-[800px]:grid-cols-4">
          {new Array(16).fill("").map((_, index) => {
            return (
              <div
                key={index}
                className="h-80 w-full max-w-70 animate-pulse overflow-hidden rounded-xl bg-white shadow-md"
              >
                <div className="h-40 w-full bg-gray-200" />
                <div className="space-y-3 p-4">
                  <div className="h-4 w-20 rounded bg-gray-200" />
                  <div className="h-5 w-full rounded bg-gray-200" />
                  <div className="h-4 w-full rounded bg-gray-200" />
                  <div className="h-4 w-4/5 rounded bg-gray-200" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-100 px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-md">
          <h2 className="text-2xl font-bold text-red-600">
            Something went wrong
          </h2>

          <p className="mt-2 text-gray-500">
            We couldn't load the posts. Please try again.
          </p>

          <button
           onClick={() => dispatch(fetchPosts())}
            className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700 cursor-pointer"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full bg-gray-100 px-6 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 justify-items-center gap-8 min-[500px]:grid-cols-2 min-[800px]:grid-cols-4">
        {posts.map((post) => {
          return (
            <Link
              to={`/post/${post.id}`}
              key={post.id}
              className="group w-full max-w-72 overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={`https://picsum.photos/400/300?random=${post.id}`}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <p className="text-sm font-semibold text-blue-600">
                  User #{post.id}
                </p>

                <h2 className="mt-2 line-clamp-2 text-lg font-bold capitalize text-gray-900">
                  {post.title}
                </h2>

                <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-500">
                  {post.body}
                </p>

                <p className="mt-4 text-sm font-semibold text-blue-600">
                  Read post →
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
