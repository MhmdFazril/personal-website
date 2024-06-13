export default function Contact() {
  return (
    <section className="bg-white relative" id="contact">
      <h1
        className="text-3xl md:text-4xl font-extrabold text-black text-center md:p-10 p-6"
        style={{ fontFamily: "poppins" }}
      >
        CONTACT
      </h1>
      <div className="h-2 w-1/3 rounded-lg bg-[#06051A]" />
      <div className="sm:flex sm:justify-around md:justify-evenly mt-5">
        <div className="ml-3 sm:ml-0 mt-3">
          <h1
            className="text-[#06051A] text-2xl sm:text-3xl font-bold"
            style={{ fontFamily: "poppins" }}
          >
            Muhamad Fazril Maulana
          </h1>
          <p className="text-[#06051A] text-base">Web dev &amp; Mobile dev</p>
          <p className="text-[#06051A] text-base mt-5">
            Email : mfazrilmaulana@gmail.com
          </p>
        </div>
        <div className="mt-5">
          <div className="flex gap-4 justify-center">
            <a
              href="https://www.instagram.com/mhmd_fazrill/"
              className="hover:-translate-y-1 transition"
            >
              <img src="img/instagram.png" alt="instagram" className="w-12" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhamad-fazril/"
              className="hover:-translate-y-1 transition"
            >
              <img src="img/linkedin.png" alt="instagram" className="w-12" />
            </a>
            <a
              href="https://github.com/MhmdFazril"
              className="hover:-translate-y-1 transition"
            >
              <img src="img/github.png" alt="instagram" className="w-12" />
            </a>
          </div>
          <div className="flex justify-center">
            <a
              href="./public/CV_Muhamad Fazril Maulana.pdf"
              target="blank"
              className="text-base my-8 text-[#06051A] border-[#06051A] border-2 hover:bg-[#06051A] p-2 hover:text-white rounded-md transition"
            >
              See my CV
            </a>
          </div>
        </div>
      </div>
      <div className="h-2 w-1/3 rounded-lg bg-[#06051A] absolute right-0 bottom-0" />
    </section>
  );
}
