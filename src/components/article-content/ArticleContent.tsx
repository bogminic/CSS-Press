import React, { useRef, useState } from "react";
// @ts-ignore
import Style from "style-it";
import parse, {
  DOMNode,
  HTMLReactParserOptions,
  Element,
  attributesToProps,
} from "html-react-parser";

type Props = {
  articleContent: string;
  tipInfo: string;
  tipSelector: string;
};

const options = (tipInfo: string, tipSelector: string, handleMouseOver: (e: any) => void) =>
({
  replace: (domNode: DOMNode) => {
    if (domNode instanceof Element && domNode.name === tipSelector && tipInfo && domNode.attribs.class !== 'misprint') {
      const CustomTag = `${tipSelector}` as keyof JSX.IntrinsicElements;
      const props = attributesToProps(domNode.attribs);

      // Tags with text inside
      if (domNode.firstChild && domNode.children[0].type === "text" && domNode.children.length === 1) {
        const content = (
          <CustomTag className="article__reference" {...props} onMouseOver={handleMouseOver}>
            {domNode.children[0].data}
          </CustomTag>
        );
        return content
      }

      return (<CustomTag className="article__reference" {...props} onMouseOver={handleMouseOver}></CustomTag>)

    }
  },
} as HTMLReactParserOptions);

function createArticleContent(
  articleContent: string,
  tipInfo: string,
  tipSelector: string,
  handleMouseOver: (e: any) => void,
) {
  return parse(articleContent, options(tipInfo, tipSelector, handleMouseOver));
}

export const ArticleContent = ({ articleContent, tipInfo, tipSelector }: Props) => {

  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const parentRef = useRef<HTMLInputElement>(null);

  const handleMouseOver = (e: MouseEvent) => {
    const parentRect = parentRef?.current?.getBoundingClientRect();
    const node = e?.target as HTMLElement;
    const childRect = node.getBoundingClientRect();

    const topTooltip = Math.round(childRect.top - (parentRect?.top || 0)) + childRect.height + 5;
    const leftTooltip = Math.round(childRect.left - (parentRect?.left || 0));

    setTop(topTooltip);
    setLeft(leftTooltip);
  };

  const content = createArticleContent(articleContent, tipInfo, tipSelector, handleMouseOver);
  return (
    <article ref={parentRef} className="article__body">
      <Style>
        {`.article__tooltip {top: ${top}px; left: ${left}px;} `}
      </Style>
      {content}
      <span className="article__tooltip">
        {tipInfo}
      </span>
    </article>
  );
};
