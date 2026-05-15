import { globalStyles } from "./global";
import { homeStyles } from "./home";
import { postStyles } from "./post";
import { categoryStyles } from "./category";

export const getStyles = (page = "home") => {
  let css = globalStyles;

  if (page === "home") css += homeStyles;
  if (page === "post") css += postStyles;
  if (page === "category") css += categoryStyles;

  return css;
};
