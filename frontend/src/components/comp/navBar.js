import { useHistory } from "react-router-dom";
import {BackEnd_URL, FrontEnd_URL, Name} from '../../api'

export default function NavBar({ logo, userName,acces }) {
  let history = useHistory();
  return (
    <>
      <div>
        <nav id="header" className="fixed w-full z-30 top-0 text-white">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div className="pl-4 flex items-center">
              <a
                className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                href="/"
              >
                {Name}
              </a>
            </div>
            <div className="mr-7 mt-3">
              {acces === "unauthorized" ? (
                <button
                  className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 rounded-3xl"
                  onClick={() =>
                    (window.location.href =
                      `${BackEnd_URL}/api/auth/discord/`)
                  }
                >
                  <span className="mx-1">Login</span>
                </button>
              ) : (
                <div className="flex">
                  <img
                    src={logo}
                    alt="logo"
                    className="rounded-full w-11 border-gray-400 border-2 mr-5 cursor-pointer"
                    onClick={() => history.push("/account")}
                  />
                  <p
                    className="mt-2 cursor-pointer"
                    onClick={() => history.push("/account")}
                  >
                    {userName}
                  </p>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
