import Navbar from "../components/Navbar";
import Cv from "./components/Cv";
import SwotAnalisis from "./components/SwotAnalisis";
import Footer from "../components/Footer";

export default function Resume() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Cv />
        <SwotAnalisis />
      </div>
      <Footer />
    </main>
  );
}
