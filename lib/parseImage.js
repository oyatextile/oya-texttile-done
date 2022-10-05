import * as htmlparser from "htmlparser2";
import { select } from "soupselect";

export const parseImages = (rawHtml) => {
  var data;
  var handler = new htmlparser.DomHandler(function (error, dom) {
    if (error) console.log("error:", error);
    else {
      // selector reference:
      // http://www.w3schools.com/jquery/jquery_ref_selectors.asp
      data = select(dom, "img");
    }
  });
  var parser = new htmlparser.Parser(handler);
  parser.parseComplete(rawHtml);
  return data.map((it) => it.attribs);
};

export const parseSrc = (src) => {
  // http://oyalinen.com/cms/wp-content/uploads/2022/10/21-1.jpg
  src =src.replace("oyalinen", "oyatextile");
  return src;
};
