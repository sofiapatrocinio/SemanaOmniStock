import User from '../models/User';
import GenerateHash from '../utils/generateHash';

class UserController {
    async create(req, res) {
        const { name, password, email } = req.body;
        const password_hash = await GenerateHash(password);
        try {
            const user = await User.create({ name, password_hash, email });
            res.json(user);
        } catch (error) {
            res.status(400).json({ message: "Não foi possível criar seu usuário", error })
        }
    }
}

export default new UserController();