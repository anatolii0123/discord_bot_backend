export default function ListGuild({ guilds, text }) {
  return (
    <>
      <div>
        {guilds.map((guild, i) => {
          return (
            <div className="flex justify-between hover:bg-gray-600 md:w-128 sm:w-128 p-1" key={i}>
              <div className="flex mt-4">
                {guild.icon !== null ? (
                  <img
                    src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
                    alt="server-logo"
                    className="rounded-3xl w-10 mr-2 mb-3"
                  />
                ) : (
                  <div className="mr-2 mb-3">
                    <div className="rounded-3xl w-10 bg-gray-500 pb-2 border-white border-2">
                      <p className="text-center pt-1">
                        {guild.name.toUpperCase().charAt(0)}
                      </p>
                    </div>
                  </div>
                )}
                <li className="cursor-pointer mx-auto mt-3 text-xs">
                  {guild.name}
                </li>
              </div>
              <div className="mt-4">
                <button
                  className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700 "
                  onClick={() =>
                    (window.location.href = text === 'Manage' ? `http://localhost:3000/server/${guild.id}` : `http://discord.com/oauth2/authorize?client_id=905608828970729482&scope=bot%20applications.commands&guild_id=${guild.id}&response_type=code&redirect_uri=http%3A%2F%2Fdiscord-bot-backend-app.herokuapp.com%2Fapi%2Fauth%2Fdiscord%2Fredirect`)
                  }
                >
                  {text}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
