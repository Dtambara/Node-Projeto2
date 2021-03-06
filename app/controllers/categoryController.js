const { Category } = require('../models');
const { Snippet } = require('../models');

module.exports = {
  async store(req, res, next) {
    try {
      const category = await Category.create({
        ...req.body,
        UserId: req.session.user.id,
      });

      req.flash('success', 'Categoria criada com sucesso.');

      return res.redirect(`/app/categories/${category.id}`);
    } catch (err) {
      return next(err);
    }
  },

  async show(req, res, next) {
    try {
      const categories = await Category.findAll({
        where: {
          userId: req.session.user.id,
        },
        include: [Snippet],
      });

      const CategoryId = req.params.id;
      const snippets = await Snippet.findAll({
        where: { CategoryId },
      });

      return res.render('categories/show', {
        categories,
        snippets,
        activeCategory: CategoryId,
      });
    } catch (err) {
      return next(err);
    }
  },
};
