import './Article.css';

export const Article = ({ title, text }) => {
  return (
    <article className="article">
      <h3 className="article__title">{title}</h3>
      <p className="article__text">{text}</p>
    </article>
  );
};
