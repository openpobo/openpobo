import { globalStyles } from "./global";
import { homeStyles } from "./home";
import { postStyles } from "./post";
import { categoryStyles } from "./category";

/**
 * CSS Router
 * Menentukan CSS berdasarkan halaman
 */
export const getStyles = (page = "home") => {
  let css = globalStyles;

  switch (page) {
    case "home":
      css += homeStyles;
      break;

    case "post":
      css += postStyles;
      break;

    case "category":
      css += categoryStyles;
      break;
  }

  return css;
};
