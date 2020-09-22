import Category from '../models/Category';

class CategoryController {
    async create(req, res) {
        try {
            const category = await Category.create(req.body);
            return res.json(category);
        } catch (error) {
            return res.status(400).json({ message: error.message || error });
        }
    }

    async index(req, res) {
        const { userId } = req.params;
        try {
            const categories = await Category.find({ user: userId }).populate("user");
            return res.json(categories);

        } catch (error) {
            return res.status(400).json({ message: error.message || error });
        }
    }
}

export default new CategoryController();