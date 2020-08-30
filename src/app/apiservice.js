import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://localhost:8080'
})

class Service {
    constructor(apiurl){
        this.apiurl = apiurl;
    }

    post(url, objeto){
        const requstUrl = `${this.apiurl}${url}`
        return httpClient.post(requstUrl, objeto);
    }

    put(url, objeto){
        const requstUrl = `${this.apiurl}${url}`
        return httpClient.put(requstUrl, objeto);
    }

    delete(url){
       
        return httpClient.delete(url);
    }

    get(url){
        
        return httpClient.get(url);
    }
}

export default Service;