import User from '../models/User';
import GenerateHash from '../utils/generateHash';
import GenerateToken from '../utils/generateToken';

class UserController {
    async create(req, res) {
        const { name, password, email } = req.body;
        const password_hash = await GenerateHash(password);
        try {
            const user = await User.create({
                name,
                password_hash,
                email,
              });
            const payload = { _id: user._id, name: user.name, email: user.email, };
            const token = GenerateToken(payload);
            return res.header("x-auth-token", token).json(user);
        } catch (error) {
            res.status(400).json({ message: "Não foi possível criar seu usuário", error })
        }
    }
}

export default new UserController();