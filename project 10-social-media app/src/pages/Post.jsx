import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

export default function Post() {
  const navigate = useNavigate();
  const { id } = useParams();

  const posts = useSelector((state) => state.posts.posts);

  const post = posts.find((post) => post.id === Number(id));

  useEffect(() => {
    if (!post) {
      navigate("/");
    }
  }, [post, navigate]);

  if (!post) {
    return null;
  }

  return (
    <main className="min-h-screen w-full bg-gray-100 px-4 py-10">
      <article className="mx-auto max-w-2xl overflow-hidden rounded-2xl bg-white shadow-lg">
        <img
          src={`https://picsum.photos/800/500?random=${post.id}`}
          alt={post.title}
          className="h-auto max-h-125 w-full object-cover"
        />

        <div className="p-6">
          <p className="text-sm font-semibold text-blue-600">
            User #{post.userId}
          </p>

          <h1 className="mt-3 text-2xl font-bold capitalize text-gray-900">
            {post.title}
          </h1>

          <p className="mt-4 text-base leading-7 text-gray-600">{post.body}</p>
        </div>
      </article>
    </main>
  );
}
