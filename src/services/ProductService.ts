import axios from 'axios';

export default class ProductService {

    public getProducts() {
        return axios.get('https://api.mocki.io/v1/8ef1986c').then(res => res.data.data);
    }
}
