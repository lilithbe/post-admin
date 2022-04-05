import axios from 'axios';

export class ProductService {

    getProductsSmall() {
        return axios.get('post-admin/assets/demo/data/products-small.json').then(res => res.data.data);
    }

    getProducts() {
        return axios.get('post-admin/assets/demo/data/products.json').then(res => res.data.data);
    }

    getProductsWithOrdersSmall() {
        return axios.get('post-admin/assets/demo/data/products-orders-small.json').then(res => res.data.data);
    }
}