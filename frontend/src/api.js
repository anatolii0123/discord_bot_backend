import axios from "axios";

export const BackEnd_URL = 'http://discord-bot-backend-app.herokuapp.com';
export const FrontEnd_URL = 'http://discord-bot-backend-app.herokuapp.com'
export const Name = 'Vexer';

export function getAuth(user) {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    const url = user ? `${BackEnd_URL}/api/auth?user=${encodeURIComponent(JSON.stringify(user))}` : `${BackEnd_URL}/api/auth` ;
    return axios.get(url, { withCredentials: true, credentials: 'include' })
}

export function getGuilds(user) {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    const url = user ? `${BackEnd_URL}/api/discord/guilds?user=${encodeURIComponent(JSON.stringify(user))}` : `${BackEnd_URL}/api/discord/guilds` ;
    return axios.get(url, { withCredentials: true, credentials: 'include' })
}
