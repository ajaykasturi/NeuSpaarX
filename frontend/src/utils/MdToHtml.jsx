import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
const Code = (props) => {
  const language = props.className?.split("-")[1];
  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus}>
      {props.children}
    </SyntaxHighlighter>
  );
};
function MdToHtml(props) {
  console.log(props.path);
  const [state, setState] = useState("");
  useEffect(() => {
    props.path &&
      import(/* @vite-ignore */ `../mdblogs/${props.path}`).then((res) =>
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setState(res))
      );
  }, []);
  if (!props.path) return <div>Not Found</div>;
  const blog = props.blog;
  return (
    <div className="w-full flex justify-center mt-1 gap-x-2 p-2">
      <div className="p-2 w-full">{/* Any Promotions displayed here */}</div>
      <div className="flex flex-col items-center min-w-fit w-full  gap-y-5 mx-[4vw]">
        <div className="flex gap-x-3 items-center self-start">
          <div className="bg-[#274797] size-12 rounded-full text-white font-semibold flex justify-center items-center text-3xl">
            {blog.publisher.charAt(0)}
          </div>
          <div className="flex flex-col gap-y-1">
            <h2 className="font-Poppins  leading-none font-medium">
              {blog.publisher}
            </h2>
            <div className="">
              <span className="font-Roboto  leading-none">{blog.date}</span>
              <span>&nbsp;•&nbsp;</span>
              <span className="font-Roboto  leading-none">
                {blog.readLength}
              </span>
            </div>
          </div>
        </div>
        <div className="prose prose-pre:bg-white w-full">
          <Markdown
            options={{
              overrides: {
                code: {
                  component: Code,
                },
              },
            }}
          >
            {state}
          </Markdown>
        </div>
      </div>
      <div className="p-2 w-full"> {/* Any Promotions displayed here */}</div>
    </div>
  );
}

export default MdToHtml;
