import { useState } from "react";

export default function Navigation() {
  const [NavVisible, setNavVisible] = useState(true);

  function handleSetNav() {
    setNavVisible(!NavVisible);
    return console.log(NavVisible);
  }

  return (
    <nav className="relative">
      <div className="sm:hidden">
        <div>
          <div
            className="w-8 h-8 rounded-sm absolute right-1 top-3 cursor-pointer flex justify-center mx-auto"
            onClick={handleSetNav}
          >
            <img src="img/burger-line.png" width="80%" alt="burger-line" />
            &nbsp;
          </div>
          <div
            className={
              "w-40 bg-white absolute right-1 top-12 rounded-l-lg rounded-b-lg" +
              (NavVisible ? " hidden" : " ")
            }
          >
            <a
              href=""
              className="text-[#06051A] hover:bg-slate-400 rounded-tl-lg hover:text-white block text-center py-5"
            >
              Projects
            </a>
            <a
              href=""
              className="text-[#06051A] hover:bg-slate-400 hover:text-white block text-center py-5"
            >
              Skills
            </a>
            <a
              href=""
              className="text-[#06051A] hover:bg-slate-400 rounded-b-lg hover:text-white block text-center py-5"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
        <ul className="flex p-2 justify-center gap-20 text-xl">
          <li>
            <a
              href="#project"
              className="hover:bg-white hover:text-[#06051A] px-4 py-1 rounded-sm transition"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:bg-white hover:text-[#06051A] px-2 py-1 rounded-sm transition"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:bg-white hover:text-[#06051A] px-2 py-1 rounded-sm transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
