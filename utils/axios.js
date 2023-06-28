import axios from "axios";

const config = {
    baseURL: "https://ssd.martins.com.br/homologacao/mobile.forcavendasapi",
    headers: {
        'access_token': '21412138-451a-45d5-ac05-46562e4b6ea7',
        'client_id': '9e712726-9d33-437b-b4a6-47da4a86d64d'
    }
}

export const _axios = axios.create(config);