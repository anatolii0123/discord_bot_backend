import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import Loading from "./comp/Loading";
import NavBar from "./comp/navBar";
import { getAuth, BackEnd_URL, FrontEnd_URL } from "../api";
export default function Server() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [prefix, setPrefix] = useState("");
  const [userName, setUsername] = useState("");
  const [logo, setLogo] = useState("");
  const [acces, setAcces] = useState("");

  const [members, setMembers] = useState(0);
  const [channels, setChannels] = useState(0);
  const [region, setRegion] = useState("");
  const [roles, setRoles] = useState(0);
  let guildsarray = [];
  useEffect(() => {
    getAuth().then((res) => {
      setAcces(res.data.msg);
      if (acces === "authorized") {
        setUsername(res.data.user.discordTag);
        setLogo(
          `https://cdn.discordapp.com/avatars/${res.data.user.discordId}/${res.data.user.avatar}.png?size=128`
        );
      }
    });
  }, [acces]);
  useEffect(() => {
    function getGuilds() {
      axios
        .get(`${BackEnd_URL}/api/discord/guilds`, {
          withCredentials: true,
        })
        .then((res) => {
          let comservers = res.data.comservs;

          comservers.map((guild) => guildsarray.push(guild.id));
          if (!guildsarray.includes(id)) {
            window.location.href = `${FrontEnd_URL}/account`;
          }
        });
    }
    function getPrefix() {
      axios.get(`${BackEnd_URL}/discord/prefixs?id=${id}`).then(
        (res) => {
          setPrefix(res.data.prefix);
        },
        (err) => {
          console.log(err);
        }
      );
    }
    function getDetailsGuild() {
      axios
        .get(`${BackEnd_URL}/api/discord/getguildinfo?id=${id}`)
        .then((res) => {
          setMembers(res.data.members);
          setChannels(res.data.channels);
          setRegion(res.data.region);
          setRoles(res.data.roles);
        });
    }
    setTimeout(() => {
      getGuilds();
      getPrefix();
      getDetailsGuild();
    }, 1000);
    setTimeout(() => setLoading(false), 2500);
    // eslint-disable-next-line
  }, []);
  const onSubmit = (data) => {
    axios
      .post(`${BackEnd_URL}/api/discord/prefixs`, {
        id,
        prefix: data.prefix,
      })
      .then((res) => {
        toast.success("The settings have been changed.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        toast.error("An error occurred.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  const arayu = ["informations", "Settings"];
  const [cpe, setCpe] = useState(0);

  return (
    <div>
      {loading === true ? (
        <Loading />
      ) : (
        <div
          className="leading-normal tracking-normal text-white h-full bg-gray-900"
          style={{ width: "100%", minHeight: "100vh" }}
        >
          <NavBar logo={logo} userName={userName} acces={acces} />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div className="pt-36">
            <section className="max-w-3xl p-6 mx-auto bg-gray-800 rounded-md shadow-md text-center">
              <h2 className="text-lg font-semibold text-white capitalize">
                Server settings
              </h2>
              <div className="flex justify-center items-center h-64 mx-auto">
                <ul className="flex mb-52">
                  {arayu.map((data, i) => {
                    return (
                      <li
                        key={i}
                        className={
                          cpe === i
                            ? "cursor-pointer py-2 px-4 text-gray-500 border-b-2"
                            : "cursor-pointer py-2 px-4 text-gray-500"
                        }
                        onClick={() => setCpe(i)}
                      >
                        {data}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="text-center mx-auto relative bottom-40">
                <div className=" text-gray-500 font-thin">
                  <div className={cpe === 0 ? "block" : "hidden"}>
                    <p>
                      Members: <span className="text-white">{members}</span>
                    </p>
                    <p>
                      Total Channels:{" "}
                      <span className="text-white">{channels}</span>
                    </p>
                    <p>
                      Roles: <span className="text-white">{roles}</span>
                    </p>
                    <p>
                      Region: <span className="text-white">{region}</span>
                    </p>
                  </div>
                  <div className={cpe === 1 ? "block" : "hidden"}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="">
                        <div>
                          <label className="text-gray-200" htmlFor="prefix">
                            Prefix
                          </label>
                          <input
                            className="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-500 focus:ring"
                            {...register("prefix", {
                              required: true,
                              maxLength: 5,
                              minLength: 1,
                              pattern: /\S+/,
                              value: prefix,
                            })}
                          />
                          <div className="flex">
                            {errors.prefix &&
                              errors.prefix.type === "required" && (
                                <span className="">This is required</span>
                              )}
                            {errors.prefix &&
                              errors.prefix.type === "maxLength" && (
                                <span>Max length exceeded</span>
                              )}
                            {errors.prefix &&
                              errors.prefix.type === "pattern" && (
                                <span>Without white space</span>
                              )}
                          </div>
                        </div>
                        <div>
  
                        </div>
                      </div>
                      <div className="flex justify-center mt-6">
                        <button
                          className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
