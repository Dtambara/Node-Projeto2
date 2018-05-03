const { Snippet, Category } = require('../models');

module.exports = {
  async store(req, res, next) {
    try {
      const { activeCategory } = req.params;

      const snippet = Snippet.create({
        ...req.body,
        CategoryId: activeCategory,
      });

      req.flash('success', 'Snippet criado com sucesso.');

      return res.redirect(`/app/categories/${activeCategory.id}/snippets/${snippet.id}`);
    } catch (err) {
      return next(err);
    }
  },

  async show(req, res, next) {
    try {
      const { categoryId, id} = req.params;
    } catch (err) {
      return next(err);
    }
  },
};
