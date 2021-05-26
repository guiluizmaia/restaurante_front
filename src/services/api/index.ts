import axios, { AxiosAdapter, AxiosInstance, AxiosResponse } from 'axios';

export class Api{
    private baseURL: string;
    private axios: AxiosInstance;
    constructor(){
        this.baseURL = "http://localhost:3333";
        this.axios = axios.create({ baseURL: this.baseURL });
    }

    setHeaders(token: string){
        this.axios.defaults.headers['Authorization'] = `Bearer ${token}`;
    }

    async login(email: string, password: string): Promise<AxiosResponse>{
        const response = await this.axios.get(`/user/login/${email}/${password}`);
        return response;
    }
}

export default new Api();