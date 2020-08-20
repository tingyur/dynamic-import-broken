import React, { useState, useEffect } from "react";

let id = 1;

export default () => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    // import('./1.html') // work fine
    // import('./' + id + '.html') // work fail
    import(`./${id}.html`) // work fail
      .then((res) => {
        setHtml(res.default);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>加载完毕</h1>
      <p>{html}</p>
    </div>
  );
};
