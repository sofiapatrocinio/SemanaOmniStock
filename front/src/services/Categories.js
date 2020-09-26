import api from "../config/api";

class Categories {
    async loadCategories(userId){
        const response = await api.get(`/categories/${userId}`);
        return response.data;
    }

    async createCategory(name, description, user){
        const response = await api.post(`/category/`, {name, description, user});
        return response.data;
    }
}

export default new Categories();