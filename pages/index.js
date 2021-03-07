import Head from "next/head";
import { useState } from "react";
import convert from 'html-to-jsx';


export default function Home() {

  const [text, setText] = useState('<h1>Hello! Write some html here</h1>')
  

  let html = text
  let jsx = convert(html)

  console.log(jsx)
  return (
    <>
      <h1>HTML to JSX Converter</h1>
      <div className="wrap">
        <textarea rows="28" cols="80" value={text} onChange={event => setText(event.target.value)}></textarea>

        <textarea rows="28" cols="80" value={jsx}></textarea>
        <button onClick={() => {navigator.clipboard.writeText(jsx)}}>Copy</button>
      </div>
    </>
  );
}
