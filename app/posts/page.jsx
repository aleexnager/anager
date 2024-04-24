import Link from "next/link";
import { getAllPostsMeta } from "../lib/mdx";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";
import ProjectsCarousel from "./components/ProjectsCarousel";
import Footer from "../components/Footer";

const Post = async () => {
  const posts = await getAllPostsMeta();

  return (
    <section className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <ul
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {posts?.map((post) => (
            <Link
              href={`posts/${post.slug}`}
              key={post?.title}
              className="border border-red-500"
            >
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="mt-4 text-sm">{post.description}</p>
            </Link>
          ))}
        </ul>
        <ProjectsCarousel />
      </div>
      <Footer />
    </section>
  );
};

export default Post;
