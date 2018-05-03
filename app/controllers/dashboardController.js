const { Category, Snippet } = require('../models');

module.exports = {
  async index(req, res, next) {
    try {
      const categories = await Category.findAll({
        where: {
          userId: req.session.user.id,
        },
        include: [Snippet],
      });
      return res.render('dashboard/index', { categories });
    } catch (err) {
      return next(err);
    }
  },
};
