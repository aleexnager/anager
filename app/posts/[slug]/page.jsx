import { getPostsBySlug } from "../../lib/mdx";

const getPageContent = async (slug) => {
  const { meta, content } = await getPostsBySlug(slug);
  return { meta, content };
};

export async function generateMetadata({ params }) {
  const { meta } = await getPageContent(params.slug);
  return {
    title: meta.title,
    description: meta.description,
    image: meta.image,
  };
}

const Page = async ({ params }) => {
  const { content } = await getPageContent(params.slug);

  return (
    <section className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto px-12 py-4 prose">{content}</div>
    </section>
  );
};

export default Page;
