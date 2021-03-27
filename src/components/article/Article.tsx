import './Article.scss';

interface ArticleProps {
  articleContent: string
}

function Article(props: ArticleProps) {
  const { articleContent } = props;

  return (
    <div className="article">
      <div className="dummy">
        <div className="dummy__content"></div>
        <div className="dummy__img"></div>
      </div>
      <article className="article__body" dangerouslySetInnerHTML={{__html: articleContent}}></article>
      <div className="dummy">
        <div className="dummy__content"></div>
        <div className="dummy__img"></div>
      </div>
      <div></div>
    </div>
  );
}

export default Article;
