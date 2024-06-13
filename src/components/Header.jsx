import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="w-full h-screen bg-[#06051A] relative">
      <Navigation />
      <div className="pt-14 md:pt-0 md:mt-20 md:flex">
        <section className="ml-4 md:mt-7">
          <h2 className="text-4xl sm:text-5xl md:text-7xl my-2">
            Hello!! I'm 😬
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-green-300">
            Muhamad Fazril Maulana
          </h1>
          <p className="text-sm sm:text-lg md:text-xl md:mt-6">
            I am an information engineering student who has an interest in
            website development and mobile development
          </p>
          <div className="flex gap-6 md:mt-5 mt-2">
            <div className="px-2 py-[2px] sm:text-md md:text-xl border-white border-2 rounded-md hover:bg-white hover:text-black transition">
              Website
            </div>
            <div className="px-2 py-[2px] sm:text-md md:text-xl border-white border-2 rounded-md hover:bg-white hover:text-black transition">
              Mobile
            </div>
          </div>
          <a
            href="#project"
            className="px-3 py-1 bg-blue-700 text-white rounded-md md:mt-9 hover:-translate-y-1 transition hidden sm:inline-block sm:mt-5"
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
        <section className="absolute md:static bottom-0 flex justify-center w-full">
          <img
            src="img/profile.png"
            alt="profile"
            className="w-1/2 sm:w-64 xl:w-[430px]"
          />
        </section>
      </div>
    </header>
  );
}
