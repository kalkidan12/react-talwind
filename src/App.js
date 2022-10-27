import "./App.css";
import logo from "./assets/logo.png";
import { AiFillGithub } from "react-icons/ai";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";

function App() {
  const src = [{ id: 1, url: "https://www.youtube.com/embed/Ybc0e-D8o4A" }];
  return (
    <div className="w-screen bg-slate-900 p-5">
      {/* header */}
      <nav className="px-2 flex justify-between items-center text-slate-300">
        <div className="flex items-center justify-around cursor-pointer">
          <img
            src={logo}
            className="px-2"
            alt="logo"
            style={{ width: 55, height: 20 }}
          />
          <span className="font-medium" style={{ fontSize: 22 }}>
            tailwindcss
          </span>
          <buttton className="sm:hidden md:hidden lg:flex mx-2 bg-slate-800 cursor-pointer hover:bg-slate-700 rounded-full">
            {/* v3.2.1 */}
            <select className="bg-transparent">
              <option className="bg-slate-800 cursor-pointer">v3.2.1</option>
              <option className="bg-slate-800 cursor-pointer">v1.0.1</option>
              <option className="bg-slate-800 cursor-pointer">v0.2.1</option>
            </select>
          </buttton>
          <button
            style={{ fontSize: 12 }}
            className="sm:hidden md:hidden lg:hidden xl:flex items-center justify-between px-2 py-1 bg-slate-800 px-3 rounded-full text-blue-500 hover:bg-slate-700 "
          >
            Tailwind CSS v3.2 Dynamic breakpoints, multi-config, container
            queries, and more{" "}
            <i className="mt-1">
              <MdOutlineKeyboardArrowRight />
            </i>
          </button>
        </div>
        <div className="sm:hidden md:hidden lg:flex justify-between items-center">
          <ul className="flex justify-between items-center">
            <li className="px-3 cursor-pointer hover:text-blue-500">Docs</li>
            <li className="px-3 cursor-pointer hover:text-blue-500">
              Components
            </li>
            <li className="px-3 cursor-pointer hover:text-blue-500">Blogs</li>
            <li className="flex px-3 cursor-pointer hover:text-blue-500">
              Show Case
              <button
                style={{ fontSize: 12 }}
                className="mx-2 py-1 bg-slate-800 rounded px-2 rounded-xl text-blue-500 hover:bg-slate-700 "
              >
                New
              </button>
            </li>
          </ul>
          <ul className="flex justify-between items-center ml-7">
            <li className="px-3 cursor-pointer hover:text-white">
              <BsMoonStarsFill size={18} />
            </li>
            <li className="px-3 cursor-pointer hover:text-white">
              <AiFillGithub size={25} />
            </li>
          </ul>
        </div>
        <div className="sm:flex md:flex lg:hidden">
          <ul className="flex justify-between items-center ml-7">
            <li className="px-2 cursor-pointer hover:text-white">
              <AiOutlineSearch size={25} />
            </li>
            <li className="px-2 cursor-pointer hover:text-white">
              <FiMoreVertical size={25} />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;
