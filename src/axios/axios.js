import axios from 'axios'
import md5 from "md5"

const stamp = new Date().toISOString().slice(0,10).replace(/-/g,"");
const XAuthHash = md5(`Valantis_${stamp}`)

const instance = axios.create({
    baseURL: 'https://api.valantis.store:41000/',
    timeout: 10000,
    headers: {'X-Auth': XAuthHash}
  });


export default instance;