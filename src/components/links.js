import React from "react";
import LinksData from "../data";
const Links = () => {
  return (
    <section id="links">
      {LinksData.map((link) => {
        const { id, text, url } = link;
        return (
          <a href={url} key={id} id={id}>
            {text}
          </a>
        );
      })}
    </section>
  );
};

export default Links;
