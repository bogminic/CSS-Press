

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
  extraStyle?: string;
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
    extraStyle
  } = props;
  const highlighted =
    selector === "misprint" ? "background-color: #ffca9b; box-shadow: 0px 0px 3px red;" : "";
    const style = extraStyle 
      ? `.article__body ${extraStyle} .article__body .misprint { ${error}} .article__body .misprint {${highlighted} ${answer}}`
      : `.article__body .misprint { ${error}} .article__body .misprint {${highlighted} ${answer}}`
  return (
    <>
      <Style>
        {style}
      </Style>
      <section
        className={
          isArticleSliding
            ? "article animate__animated animate__fadeOut animate__fast"
            : "article"
        }
      >
        <div className="dummy">
          <div className="dummy__content dummy__content--rotated"></div>
          <div className="dummy__img"></div>
        </div>
        <ArticleContent articleContent={articleContent} tipInfo={tipInfo} tipSelector={tipSelector} />
        <div className="dummy">
          <div className="dummy__content"></div>
          <div className="dummy__img"></div>
        </div>
      </section>
    </>
  );
})

export default Article;
