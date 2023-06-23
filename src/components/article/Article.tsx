

import "./Article.scss";
// @ts-ignore
import Style from "style-it";
import { ArticleContent } from "../article-content/ArticleContent";
import { memo } from "react";

interface ArticleProps {
  articleContent: string;
  answer: string;
  error: string;
  selector: string;
  isArticleSliding: boolean;
  tipInfo: string;
  tipSelector: string;
}


const Article = memo(function Article(props: ArticleProps) {
  const {
    articleContent,
    answer,
    error,
    selector,
    isArticleSliding,
    tipInfo,
    tipSelector,
  } = props;
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
        <ArticleContent articleContent={articleContent} tipInfo={tipInfo} tipSelector={tipSelector} />
        <div className="dummy">
          <div className="dummy__content"></div>
          <div className="dummy__img"></div>
        </div>
      </div>
    </>
  );
})

export default Article;
