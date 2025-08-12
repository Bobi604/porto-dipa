import Profile from "../assets/img/profil.jpg";

export const About = () => {
  return (
    <>
      <section id="about" className="p-8 md:p-10 bg-white ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-shadow-lg/15">
              About Me
            </h1>
            <p className="text-gray-700 mb-4">
              I am I Wayan Dipa, a creative professional specializing in graphic
              design, photo editing, and video editing. With a keen eye for
              detail and a passion for visual storytelling, I transform ideas
              into compelling visuals that connect with audiences. My work
              blends technical precision with artistic vision—whether it’s
              designing impactful graphics, enhancing photos to perfection, or
              crafting videos that engage and inspire. Dedicated, adaptable, and
              always exploring new creative approaches, I aim to deliver results
              that are both visually stunning and meaningful.
            </p>
          </div>

          {/* Images Section */}
          <div className="grid grid-cols-1 grid-rows-1 gap-1">
            {/* Large Top Image */}
            <div className="col-span-2 row-span-1">
              <img
                src={Profile}
                alt="profile"
                className="w-70 h-70 object-cover object-center rounded-[100%] shadow"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
