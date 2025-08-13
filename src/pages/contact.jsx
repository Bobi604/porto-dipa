export const Contact = () => {
  return (
    <>
      <section className="p-10 max-w-xl mx-auto text-center scroll-smooth">
        <h2 className="text-3xl font-bold mb-4 text-shadow-lg/12">
          Contact Me
        </h2>
        <p className="text-gray-600 mb-4 text-shadow-lg/8">
          Reach out via WhatsApp or Email for collaborations and bookings.
        </p>
        <a
          href="https://wa.me/6283116168276"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition shadow-lg/18 text-shadow-lg/8 mr-4"
        >
          WhatsApp
        </a>

        <a
          href="https://drive.google.com/drive/folders/1JYFMwXU3__-O7r0DvyxZHnWzQqq3i6MH"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition shadow-lg/18 text-shadow-lg/8"
        >
          More Contents
        </a>
      </section>
    </>
  );
};
