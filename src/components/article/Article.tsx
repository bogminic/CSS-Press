

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
  isLevelResolved: boolean;
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
    isLevelResolved,
    tipInfo,
    tipSelector,
    extraStyle
  } = props;

  const highlighted =
    selector === "misprint" ? "background-color: #ffca9b; box-shadow: 0px 0px 3px red;" : "";
    const style = `.article__body .misprint { ${error}} .article__body .misprint {${highlighted} ${answer}}` 
    const additionalStyle = `.article__body ${extraStyle}`
    const unrippedStyle = `.article__body .ripped-effect {position: static; background: none; box-shadow: none; padding: 0;
    } .article__body .ripped-effect:after {content: none;} .ripped-effect:before {content: none;}`; 
      return (
    <>
      <Style>{style}</Style>
      <Style>{extraStyle && additionalStyle}</Style>
      <Style>{isLevelResolved && unrippedStyle}</Style>
      <section
        className={
          isArticleSliding
            ? "article animate__animated animate__fadeOut animate__fast"
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
      </section>
    </>
  );
})

export default Article;
