import Foto1 from "../../assets/img/wedding/1.JPG";
import Foto2 from "../../assets/img/wedding/2.JPG";
import Foto3 from "../../assets/img/wedding/3.JPG";
import Foto4 from "../../assets/img/wedding/4.JPG";
import PreviewGambar from "../../components/prevgambar";
export const Wedding = () => {
  const images = [Foto1, Foto2, Foto3, Foto4];
  return (
    <section id="wedding" className="p-8 md:p-16 bg-white ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shadow-lg/12">
            Wedding
          </h2>
          <p className="text-gray-700 mb-4 text-shadow-lg/8">
            Captures genuine emotions, timeless moments, and the unique beauty
            of each couple’s love story. Using a blend of candid storytelling
            and artistic portraiture, I create images that feel authentic,
            romantic, and full of heart—so each photograph becomes a piece of
            your wedding day you can relive forever. From the quiet, intimate
            glances to the grand celebrations, every frame is thoughtfully
            composed to preserve memories that will be cherished for a lifetime.
          </p>
        </div>

        {/* Images Section */}
        {/* <div className="grid grid-cols-2 grid-rows-2 gap-2"> */}
        {/* Large Top Image */}
        {/* <div className="col-span-2 row-span-1">
            <img
              src={Foto1}
              alt="danau"
              className="w-full h-full object-cover rounded shadow transform hover:scale-105 transition"
            />
          </div> */}
        {/* Bottom Left Image */}
        {/* <div>
            <img
              src={Foto2}
              alt="Highlight 2"
              className="w-100 h-60 object-cover rounded shadow transform hover:scale-105 transition"
            />
          </div> */}
        {/* Bottom Right Image */}
        {/* <div>
            <img
              src={Foto3}
              alt="Highlight 3"
              className="w-100 h-60 object-cover rounded shadow transform hover:scale-105 transition"
            />
          </div> */}
        <div className="max-w-6xl mx-auto px-4 mt-10">
          <PreviewGambar images={images}>
            {(openPreview) => (
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-4">
                {images.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Image ${idx + 1}`}
                    onClick={() => openPreview(idx)}
                    className="w-full h-64 object-cover rounded shadow cursor-pointer hover:scale-105 transition"
                  />
                ))}
              </div>
            )}
          </PreviewGambar>
        </div>
      </div>
    </section>
  );
};
