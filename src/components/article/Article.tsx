import parse, { DOMNode, HTMLReactParserOptions } from "html-react-parser";
import { Element, Text } from "domhandler";

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

const options: HTMLReactParserOptions = {
  replace: (domNode: DOMNode) => {
    if (
      domNode instanceof Element &&
      domNode.attribs &&
      domNode.name === "misprint"
    ) {
      const propertyNode = domNode.children[0];
      // Check if in <code> we have only one Text node
      if (propertyNode instanceof Text && domNode.children.length === 1) {
        const item = propertyNode.data;
        return (
          <>
            <span className="misprint">{parse(item)}</span>
          </>
        );
      }
    }
  },
};

function createArticleContent(articleContent: string) {
  return parse(articleContent, options);
}

function Article(props: ArticleProps) {
  const { articleContent, answer, error, selector, isArticleSliding } = props;
  const content = createArticleContent(articleContent);
  const highlighted =
    selector === "misprint" ? "background-color: #ffca9b" : "";
  return (
    <>
      <Style>
        {` .article__body .misprint { ${error}} .article__body .misprint { ${answer} ${highlighted}}`}
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
