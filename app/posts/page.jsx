import Link from "next/link";
import { getAllPostsMeta } from "../lib/mdx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Post = async () => {
  const posts = await getAllPostsMeta();

  return (
    <section className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <div className="flex gap-6 mt-6">
          {posts?.map((post) => (
            <Link
              href={`posts/${post.slug}`}
              key={post?.title}
              className="border border-red-500"
            >
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="mt-4 text-sm">{post.description}</p>
              <time className="text-[12px] text-gray-400">
                {post.publishDate}
              </time>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Post;
