import Article from '../models/Article.js';

export const createArticle = async (req, res) => {
  try {
    const { title, content, authorId, tags } = req.body;

    const newArticle = new Article({
      title,
      content,
      authorId,
      tags,
      publishedAt: new Date(),
    });

    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    res.status(500).json({ message: 'Error creating article', error });
  }
};

export const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find().populate('authorId', 'name email');
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching articles', error });
  }
};

export const getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id).populate('authorId', 'name email');
    if (!article) return res.status(404).json({ message: 'Article not found' });
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching article', error });
  }
};

export const deleteArticle = async (req, res) => {
  try {
    const deleted = await Article.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Article not found' });
    res.json({ message: 'Article deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting article', error });
  }
};
