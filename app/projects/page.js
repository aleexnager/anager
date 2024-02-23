import Navbar from "../components/Navbar";
import ProjectsCarousel from "./components/ProjectsCarousel";
import Footer from "../components/Footer";

export default function Resume() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <ProjectsCarousel />
      </div>
      <Footer />
    </main>
  );
}
