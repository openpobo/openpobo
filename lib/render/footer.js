import { SITE } from "../config";

import {
  renderHeaderNav
} from "./nav-header";

export function renderHeader(props={}){

const post =
props.post || {};

const kategori =
post.kategori || "";

return `


`;

}
