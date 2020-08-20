import React, { useState, useEffect } from "react";

let id = 1;

export default () => {
  const [html, setHtml] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    // import("./1.html") // work fine
    // import('./' + id + '.html') // work fail
    import(`./${id}.html`) // work fail
      .then((res) => {
        setHtml(res.default);
      })
      .catch((err) => {
        setErrMsg(err.message);
      });
  }, []);

  return (
    <div>
      <h1>{html ? "加载成功" : `加载失败: ${errMsg}`}</h1>
      <p>{html}</p>
    </div>
  );
};
