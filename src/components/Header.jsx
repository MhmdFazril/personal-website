import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="w-full h-screen bg-[#06051A] relative overflow-hidden leading-10">
      <Navigation />
      <div className="pt-14 grid grid-cols-1 sm:grid-cols-2 md:gap-11">
        <section className="p-2 sm:pl-5">
          <h2 className="text-4xl sm:text-5xl xl:text-7xl my-2">Hello!! I'm</h2>
          <h1 className="text-3xl sm:text-4xl xl:text-6xl font-extrabold text-green-300">
            Muhamad Fazril Maulana
          </h1>
          <p className="text-sm sm:text-lg xl:text-xl md:mt-6">
            I am an information engineering student who has an interest in
            website development and mobile development
          </p>
          <div className="flex gap-6 md:mt-5 mt-2">
            <div className="px-2 py-[2px] sm:text-md xl:text-xl border-white border-2 rounded-md hover:bg-white hover:text-black transition">
              Website
            </div>
            <div className="px-2 py-[2px] sm:text-md xl:text-xl border-white border-2 rounded-md hover:bg-white hover:text-black transition">
              Mobile
            </div>
          </div>
          <a
            href="#project"
            className="px-3 py-1 bg-blue-700 text-white rounded-md md:mt-9 hover:-translate-y-1 transition hidden md:inline-block sm:mt-5"
          >
            See my Projects
            <img
              src="img/arrow.png"
              alt="arrow"
              width="30px"
              className="inline-block"
            />
          </a>
        </section>
        <section className="flex justify-center items-center">
          <img src="img/profile.png" alt="profile" className="" />
        </section>
      </div>
    </header>
  );
}
