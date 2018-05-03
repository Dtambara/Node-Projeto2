const { Snippet } = require('../models');

module.exports = {
  async store(req, res, next) {
    try {
      const activeCategory = req.params.activeCategory;

      const snippet = Snippet.create({
        ...req.body,
        CategoryId: activeCategory,
      });

      req.flash('success', 'Snippet criado com sucesso.');

      return res.redirect(`/app/categories/${category.id}`);
    } catch (err) {
      return next(err);
    }
  },
};
