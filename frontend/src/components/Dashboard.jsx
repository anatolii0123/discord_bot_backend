import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getGuilds, getAuth, BackEnd_URL } from "../api";

import ListGuild from "./comp/listGuilds";
import Loading from "./comp/Loading";
import NavBar from "./comp/navBar";
import queryString from 'query-string';

export default function Dashboard() {
  const [guilds, setGuilds] = useState([]);
  const [comguilds, setComguilds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUsername] = useState("");
  const [logo, setLogo] = useState("");
  const [acces, setAcces] = useState("");

  const history = useHistory();
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
    if (acces != "authorized") {     
    getGuilds().then((res) => {
        if (res.data.msg === "unauthorized") return (window.location.href =`${BackEnd_URL}/api/auth/discord/`);
        setGuilds(res.data.permincom);
        setComguilds(res.data.comservs);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
    }
  }, []);
  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <div
          className="leading-normal tracking-normal text-white h-full bg-gray-900"
          style={{ width: "100%", minHeight: "100vh" }}
        >
          <NavBar logo={logo} userName={userName} acces={acces} />
          <div>
            <p className="text-center pt-24">Please select a server</p>
            <div className="pt-12">
              <div className="flex flex-col w-full justify-between items-center md:text-left pl-5">
                <ul className="">
                  <ListGuild guilds={comguilds} text="Manage" />
                  <ListGuild guilds={guilds} text="Invite" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
