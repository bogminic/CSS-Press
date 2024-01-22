import "./CssPressNews.scss";
import cssPressNews from "./css-press-news.jpg";

type Props = {
  isModalOpen: boolean;
}

export default function CssPressNews({isModalOpen}: Props) {
  const cssPressNewsClasses = `css-press-news${isModalOpen ? " css-press-news--dark" : ""}`;
  return (
    <img className={cssPressNewsClasses} src={cssPressNews} alt="CSS Press News" />
  )
}