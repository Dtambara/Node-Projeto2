const { Snippet, Category } = require('../models');

module.exports = {
  async store(req, res, next) {
    try {
      const { activeCategory } = req.params;

      const snippet = await Snippet.create({
        ...req.body,
        CategoryId: activeCategory,
      });

      req.flash('success', 'Snippet criado com sucesso.');

      return res.redirect(`/app/categories/${activeCategory}/snippets/${snippet.id}`);
    } catch (err) {
      return next(err);
    }
  },
  async update(req, res, next) {
    try {
      const snippet = await Snippet.findById(req.params.id);

      await snippet.update(req.body);

      req.flash('success', 'Snippet atualizado com sucesso.');

      return res.redirect(`/app/categories/${req.params.activeCategory}/snippets/${snippet.id}`);
    } catch (err) {
      return next(err);
    }
  },
  async destroy(req, res, next) {
    try {
      await Snippet.destroy({ where: { id: req.params.id } });

      req.flash('success', 'Snippet atualizado com sucesso.');

      return res.redirect(`/app/categories/${req.params.activeCategory}`);
    } catch (err) {
      return next(err);
    }
  },
  async show(req, res, next) {
    try {
      const { categoryId, id } = req.params;

      const categories = await Category.findAll({
        where: {
          userId: req.session.user.id,
        },
        include: [Snippet],
      });

      const snippets = await Snippet.findAll({
        where: { CategoryId: categoryId },
      });

      const snippet = await Snippet.findById(id);

      return res.render('snippets/show', {
        activeCategory: categoryId,
        categories,
        snippets,
        currentSnippet: snippet,
      });
    } catch (err) {
      return next(err);
    }
  },
};
