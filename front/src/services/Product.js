import api from "../config/api";

class Product {
    async loadProducts(userId){
        const response = await api.get(`/products/${userId}`);
        return response.data;
    }
}

export default new Product();