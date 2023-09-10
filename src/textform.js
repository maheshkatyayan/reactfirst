import React, { useState } from "react";
export default function Textform() {
  const [tex, setText] = useState("");
  const [col, setCol] = useState({
    color: "black"
  });
  function cole() {
    if (col.color === "black") {
      setCol({ color: "red" });
    } else if (col.color === "red") {
      setCol({ color: "green" });
    } else if (col.color === "green") {
      setCol({ color: "yellow" });
    } else if (col.color === "yellow") {
      setCol({ color: "black" });
    }
  }
  function handupcase() {
    // console.log("button has been clicked");
    let newtext = tex.toUpperCase();
    setText(newtext);
  }
  function handlowcase() {
    // console.log("button has been clicked");
    let newtext = tex.toLowerCase();
    setText(newtext);
    console.log(tex);
  }
  function clear() {
    // console.log("button has been clicked");
    setText(" ");
  }
  function handonchange(event) {
    // console.log("button has been clicked");
    setText(event.target.value);
  }
  return (
    <>
      <div className="container mx-2">
        <textarea
          className="form-control mx-2 my-4"
          id="mybox"
          value={tex}
          style={col}
          row="10"
          onChange={handonchange}
        ></textarea>
        <button className="btn btn-primary mx-2" onClick={handupcase}>
          convert to upper
        </button>
        <button className="btn btn-primary mx-2" onClick={handlowcase}>
          convert to lower
        </button>
        <button className="btn btn-primary mx-2" onClick={clear}>
          clear to text
        </button>
        <button className="btn btn-primary mx-2" onClick={cole}>
          change color
        </button>
      </div>
      <div className="container mx-3">
        <h3>summary of the sentence that you type</h3>
        <p>
          you have {tex.split(" ").length - 2} word and {tex.length - 1}{" "}
          character
        </p>
        <h3>preview</h3>
        <p>{tex}</p>
      </div>
    </>
  );
}
