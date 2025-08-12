import Gambar1 from "../../assets/img/contemporer/1.JPG";
import Gambar2 from "../../assets/img/contemporer/2.JPG";
import Gambar3 from "../../assets/img/contemporer/3.JPG";
import Gambar4 from "../../assets/img/contemporer/4.JPG";
import Gambar5 from "../../assets/img/contemporer/5.JPG";
import PreviewGambar from "../../components/prevgambar";
export const Contemporer = () => {
  const images = [Gambar1, Gambar2, Gambar3, Gambar4];
  return (
    <section id="contemporer" className="bg-white pb-10">
      {/* Header with background image */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
        style={{
          backgroundImage: `url(${Gambar5})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-opacity-30"></div>
        <div className="relative z-10 max-w-2xl text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-shadow-lg/30">
            Contemporer
          </h2>
          <p className="text-sm md:text-base text-shadow-lg/10">
            My classic human contemporary photography fuses timeless portraiture
            with modern artistic vision. Each image honors the elegance and
            authenticity of the human form, while incorporating fresh
            perspectives in lighting, composition, and mood. The result is a
            collection of portraits that feel both nostalgic and
            current—capturing raw emotion, quiet strength, and the unique
            character of each subject in a way that transcends trends.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4 mt-10">
        <PreviewGambar images={images}>
          {(openPreview) => (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
    </section>
  );
};
