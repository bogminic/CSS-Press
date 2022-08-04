import parse from "html-react-parser";

import "./Article.scss";
// @ts-ignore
import Style from "style-it";

interface ArticleProps {
  articleContent: string;
  answer: string;
  error: string;
  selector: string;
  isArticleSliding: boolean;
}

function createArticleContent(articleContent: string) {
  return parse(articleContent);
}

function Article(props: ArticleProps) {
  const { articleContent, answer, error, selector, isArticleSliding } = props;
  const content = createArticleContent(articleContent);
  const highlighted =
    selector === "misprint" ? "background-color: #ffca9b;" : "";
  return (
    <>
      <Style>
        {` .article__body .misprint { ${error}} .article__body .misprint {${highlighted} ${answer} }`}
      </Style>
      <div
        className={
          isArticleSliding
            ? "article animate__animated animate__slideOutRight animate__fast"
            : "article"
        }
      >
        <div className="dummy">
          <div className="dummy__content"></div>
          <div className="dummy__img"></div>
        </div>
        <article className="article__body">{content}</article>
        <div className="dummy">
          <div className="dummy__content"></div>
          <div className="dummy__img"></div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Article;
