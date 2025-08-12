import { Footer } from "../components/footer";
import { Header } from "../components/header";
import ScrollToTopButton from "../components/scroll";
import { About } from "./about";
import { Contact } from "./contact";
import { Cv } from "./cv";
import { Food } from "./image_page/food";
import { Design } from "./image_page/design";
import { Wedding } from "./image_page/weding";
import { Contemporer } from "./image_page/contemporer";
import { Product } from "./image_page/product";

export const Home = () => {
  return (
    <>
      <Header />
      <section
        id="home"
        className="relative w-full h-screen overflow-hidden flex items-center justify-center text-center scroll-smooth"
      >
        {/* Overlay agar teks tetap terbaca */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 px-6">
          
          <h1 className="text-5xl md:text-8xl font-bold mb-5 text-white text-shadow-lg/30">
            PORTFOLIO
          </h1>
          <p className="max-w-xl mx-auto text-white text-base md:text-lg mt-4 text-shadow-lg/10">
            My portfolio showcases a curated selection of my recent work,
            reflecting both my creative range and attention to detail. From
            striking photography and thoughtful graphic design to compelling
            visual storytelling, each piece demonstrates my commitment to
            quality and originality. These works capture my evolving
            style—blending technical skill with artistic vision—to deliver
            results that are both impactful and memorable.
          </p>
        </div>
      </section>
      <section id="about" className="p-10 bg-white scroll-smooth">
        <About />
      </section>
      <section id="cv" className="p-10 bg-white scroll-smooth">
        <Cv />
      </section>
      <section id="beach" className="p-10 bg-white scroll-smooth">
        <Food />
      </section>
      <section id="wedding" className="p-10 bg-white scroll-smooth">
        <Wedding />
      </section>
      <section id="contemporer" className="p-10 bg-white scroll-smooth">
        <Contemporer />
      </section>
      <section id="drone" className="p-10 bg-white scroll-smooth">
        <Design />
      </section>
      <section id="product" className="p-10 bg-white scroll-smooth">
        <Product />
      </section>

      <section id="contact" className="p-10 bg-white scroll-smooth">
        <Contact />
      </section>
      <ScrollToTopButton />

      <Footer />
    </>
  );
};
