import axios from "axios";

export const BackEnd_URL = 'https://discord-bot-backend-app.herokuapp.com';
export const FrontEnd_URL = 'https://discord-bot-backend-app.herokuapp.com'
export const Name = 'Vexer';

export function getAuth() {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    return axios.get( `${BackEnd_URL}/api/auth`, { withCredentials: true, credentials: 'include' })
}

export function getGuilds() {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    return axios.get( `${BackEnd_URL}/api/discord/guilds`, { withCredentials: true, credentials: 'include' })
}
