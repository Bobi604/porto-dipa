export const Cv = () => {
  return (
    <section id="cv" className="bg-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Education and Skills */}
        <div>
          {/* Education */}
          <h2 className="text-2xl font-bold text-blue-400 mb-4">EDUCATION</h2>
          <div className="space-y-4 text-gray-800">
            <div>
              <p className="font-semibold">ALFA PRIMA CAMPUS DENPASAR</p>
              <p>D1 Graphic Design and Animation</p>
              <p className="text-sm text-gray-500">2020 – 2021</p>
            </div>
            <div className="space-y-4 text-gray-800">
              <div>
                <p className="font-semibold">SMK N 1 TAMPAKSIRING</p>
                <p>HOTEL ACCOMMODATION</p>
                <p className="text-sm text-gray-500">2017-2019</p>
              </div>
            </div>
            {/* <div>
              <p className="font-semibold">
                UX Design Professional Certificate
              </p>
              <p>Google Coursera</p>
              <p className="text-sm text-gray-500">
                2025 | Certificate ID: LH5UO4COMIQJ
              </p>
            </div>
            <div>
              <p className="font-semibold">Journalism Certificate</p>
              <p>University of Social Sciences and Humanities</p>
              <p className="text-sm text-gray-500">
                2024 | Graduated with Honors
              </p>
            </div> */}
          </div>

          {/* Skills */}
          <h2 className="text-2xl font-bold text-blue-400 mt-10 mb-4">SKILL</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-800">
            <div className="flex items-center space-x-2">
              <span className="bg-gray-200 px-2 py-1 rounded">Pr</span>
              <span>Premiere</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-gray-200 px-2 py-1 rounded">Ps</span>
              <span>Photoshop</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-gray-200 px-2 py-1 rounded">Ai</span>
              <span>Illustrator</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-gray-200 px-2 py-1 rounded">Figma</span>
              <span>Figma</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-gray-200 px-2 py-1 rounded">Ae</span>
              <span>After Effect</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-gray-200 px-2 py-1 rounded">Cv</span>
              <span>Canva</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-gray-200 px-2 py-1 rounded">Cc</span>
              <span>Capcut</span>
            </div>
          </div>
        </div>

        {/* Work Experiences */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            WORK EXPERIENCES
          </h2>
          <div className="space-y-6 text-gray-800">
            <div>
              <p className="font-semibold">
                Graphic Designer & Content Creator
              </p>
              <p>PT VEGAS VENTA VENTURY</p>
              <p className="text-sm text-gray-500">2021 – Now | 4 years</p>
              <p className="mt-1 text-sm">
                Working as a Graphic Design fron September 2021-now PT VEGAS
                VIVA VENTURY is the brand of the : Vegas Barbershop,Memphis Cafe
                and Velocity Electric Motoshop.
              </p>
              <p>My Jobdesk are :</p>
              <p>-Take Photos and Videos</p>
              <p>-Editing Photos and Videos</p>
              <p>-Design Flyer, Banner, Instagram Story/Feed and Promoe</p>
              <p>-Manage Ads FB/META bussniess</p>
            </div>
            <div>
              <p className="font-semibold">GRAPHIC DESIGN/PACKING DESIGN</p>
              <p>UPTD LAYANAN DESAIN DENPASAR</p>
              <p className="text-sm text-gray-500">2021</p>
              <p className="mt-1 text-sm">
                On The Job Trainee for 3 Month at the UPTD Layan Desain Denpasar
                as Graphic Design/Packing Design
              </p>
            </div>
            <div>
              <p className="font-semibold">
                HOUSEKEEPING & FRONT OFFICE DEPARTEMENT
              </p>
              <p>NICK HIDDEN COTTAGES</p>
              <p className="text-sm text-gray-500">2018</p>
              <p className="mt-1 text-sm">
                On The Job Trainee for 5 Month at NICK HIDDEN COTTAGES as a
                Housekeeping & Front Office Departement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
