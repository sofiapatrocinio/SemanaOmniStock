import api from "../config/api";

class Product {
    async loadProducts(userId){
        const response = await api.get(`/products/${userId}`);
        return response.data;
    }

    async createProduct(name, price, user, category){
        const response = await api.post(`/product`, {name, price, user, category});
        console.log(response.data);
        return response.data;
    }

    async editProduct(name, price, user, category, productId){
        const response = await api.put(`/product/${productId}`, {name, price, user, category});
        console.log(response.data);
        return response.data;
    }
}

export default new Product();