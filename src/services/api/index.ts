import axios, { AxiosAdapter, AxiosInstance, AxiosResponse } from 'axios';

interface IMenu{
    id: string;
    categoryId: string;
    categoryName: string;
    idUser: string;
    name: string;
    description: string;
    price: string;
    created_at: string;
    updated_at: string;
}

export class Api{
    private baseURL: string;
    private axios: AxiosInstance;
    constructor(){
        this.baseURL = "http://localhost:3333";
        this.axios = axios.create({ baseURL: this.baseURL });
    }

    setHeaders(token: string){
        this.axios.defaults.headers.Authorization = `Bearer ${token}`;
        sessionStorage.setItem('token', JSON.stringify(token))
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

    async postMenu(categoryId: string , name: string , description: string , price: string): Promise<AxiosResponse<IMenu>>{
        const response = await this.axios.post(`/menu/`, {categoryId, name, description, price});
        return response;
    }
}

export default new Api();