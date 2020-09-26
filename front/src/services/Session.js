import api from '../config/api'

class Session {
    async login(email, password) {
        const response = await api.post("/auth", { email, password });
        return response.data;
    }

    async logUp(name, email, password) {
        const response = await api.post("/user", { name, email, password });
        return response.data;
    }
}
export default new Session();