import axios, { AxiosAdapter, AxiosInstance, AxiosResponse } from 'axios';

export class Api{
    private baseURL: string;
    private axios: AxiosInstance;
    constructor(){
        this.baseURL = "http://localhost:3333";
        this.axios = axios.create({ baseURL: this.baseURL });
    }

    setHeaders(token: string){
        this.axios.defaults.headers.Authorization = `Bearer ${token}`;
        localStorage.setItem('token', JSON.stringify(token))
    }

    async login(email: string, password: string): Promise<AxiosResponse>{
        const response = await this.axios.get(`/user/login/${email}/${password}`);
        return response;
    }

    async getMenuTopic(): Promise<AxiosResponse>{
        const response = await this.axios.get(`/categorymenu/`);
        return response;
    }

    async postMenuTopic(name: string): Promise<AxiosResponse>{
        const response = await this.axios.post(`/categorymenu/`, {name});
        return response;
    }

    async patchMenuTopic(id: string, name: string): Promise<AxiosResponse>{
        const response = await this.axios.patch(`/categorymenu/`, {id, name});
        return response;
    }

    async deleteMenuTopic(id: string): Promise<AxiosResponse>{
        const response = await this.axios.delete(`/categorymenu/${id}`);
        return response;
    }

    async getMenu(): Promise<AxiosResponse>{
        const response = await this.axios.get(`/menu/`);
        return response;
    }
}

export default new Api();