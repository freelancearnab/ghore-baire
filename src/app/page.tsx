import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Highlights from "@/components/Highlights/Highlights";
import Legacy from "@/components/Legacy/Legacy";
import SignatureDish from "@/components/SignatureDish/SignatureDish";
import Footer from "@/components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <Highlights />
        <div className="section-divider" />
        <Legacy />
        <div className="section-divider" />
        <SignatureDish />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
