

import "./Article.scss";
// @ts-ignore
import Style from "style-it";
import { ArticleContent } from "../article-content/ArticleContent";
import { useEffect, useState } from "react";
import Toggle from 'react-toggle'
import { PressmenTools } from "../pressmentools/PressmenTools";

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


const Article = function Article(props: ArticleProps) {
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

  const highlighted = selector === "misprint" ? "box-shadow: 0 0 5px 2px #ffca9b;" : "";
  const highlightedBefore = selector === "misprint" ? "background-color: #ffca9b;" : "";
  const style = `.article__body .misprint { ${error} ${answer}} .article__body .ripped-effect {${highlighted}} .article__body .ripped-effect:before {${highlightedBefore}}`
  const additionalStyle = `.article__body ${extraStyle}`
  const unrippedStyle = `.article__body .ripped-effect { position: static; background: none; box-shadow: none; padding: 0; } .article__body .ripped-effect:after { content: none; } .ripped-effect:before { content: none; }`;

  const [isPressmentoolsOpen, setIsPressmentoolsOpen] = useState(false);

  useEffect(() => {
    setIsPressmentoolsOpen(false);
  },[articleContent])

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
          <div className="dummy__content dummy__content--rotated"></div>
          <div className="dummy__img"></div>
          <label className="article__toggle">
            <Toggle
              checked={isPressmentoolsOpen}
              icons={false}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsPressmentoolsOpen(e.target.checked)} />
          </label>
        </div>
        <ArticleContent articleContent={articleContent} tipInfo={tipInfo} tipSelector={tipSelector} isPressmentoolsOpen={isPressmentoolsOpen} />
        {isPressmentoolsOpen && <PressmenTools tipInfo={tipInfo} tipSelector={tipSelector} />}
        {!isPressmentoolsOpen && <div className="dummy">
          <div className="dummy__content"></div>
          <div className="dummy__img"></div>
        </div>}
      </section>
    </>
  );
};

export default Article;
