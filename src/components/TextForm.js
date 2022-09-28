import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared!", "success");
  };

  const handleCopyClick = (event) => {
    navigator.clipboard.writeText(text);
    var textArea = document.getElementById("myBox");
    textArea.select();
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleSpacesClick = (event) => {
    let newText = text.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ");
    setText(newText);
    props.showAlert("Extra spaced removed!", "success");
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleSpacesClick}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-4" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2>Your Summary</h2>
        <p>
          {text.split(/\s+/).filter((element) => element !== "").length} words and {text.replace(/\s/g, "").length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).filter((element) => element !== "").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preivew"}</p>
      </div>
    </>
  );
}
