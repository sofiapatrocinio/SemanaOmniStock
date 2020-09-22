import mongoose from 'mongoose';
class Database {
    constructor() {
        this.init();
    }
    async init() {
        try {
            await mongoose.connect(process.env.URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log("Banco conectado com sucesso!");
        } catch (error) {
            console.log("Erro ao conectar banco ->" + error);
        }
    }
}
export default new Database();