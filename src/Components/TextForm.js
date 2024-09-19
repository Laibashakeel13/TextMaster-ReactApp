import React, { useState} from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted to UpperCase.","success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been converted to LowerCase.","success");
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text has been cleared.","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const countWords = (text) => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  const handleCopyClick = () => {
    props.showAlert("Text has been copied to clickboard.","success");
  };

  const capitalizeWords = (text) => {
    return text
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
     
  };

  const handleCapitalizeClick = () => {
    let newText = capitalizeWords(text);
    setText(newText);
    props.showAlert("Text has been capitalized.","success");
  };

  const countSentences = (text) => {
    return text.split(/(?<=\.\s)/).filter(sentence => sentence.trim().length > 0).length;
  };

  const countLines = (text) => {
    return text.split('\n').filter(line => line.trim().length > 0).length;
  };

  const toAlternatingCase = (text) => {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        result += text[i].toLowerCase();
      } else {
        result += text[i].toUpperCase();
      }
    }
    return result;
  };

  const handleAlternatingClick = () => {
    let newText = toAlternatingCase(text);
    setText(newText);
    props.showAlert("Text has been alternated.","success");
  };

  const toInverseCase = (text) => {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char === char.toLowerCase()) {
        result += char.toUpperCase();
      } else {
        result += char.toLowerCase();
      }
    }
    return result;
  };

  const handleInverseClick = () => {
    let newText = toInverseCase(text);
    setText(newText);
    props.showAlert("Text has been inversed.","success");
  };
  const removeExtraSpaces = (text) => {
    return text.replace(/\s+/g, ' ').trim();
  };

  const handleRemoveSpacesClick = () => {
    let newText = removeExtraSpaces(text);
    setText(newText);
    props.showAlert("Extra spaces have been removed.", "success");
  };
  const [text, setText] = useState('');
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea
            className={`form-control ${props.mode === 'dark' ? 'placeholder-dark' : 'placeholder-light'}`}
            value={text}
            onChange={handleOnChange}
            id="Text"
            rows="8"
            placeholder="Enter text"
            style={{ backgroundColor: props.textboxColor, color: props.mode === 'dark' ? 'white' : 'black'}}
          ></textarea>
          <button disabled= {text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button disabled= {text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>
            Convert to LowerCase
          </button>
          <button disabled= {text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>
            Clear Text
          </button>
          <button disabled= {text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleCopyClick}>
            Copy Text
          </button>
          <button disabled= {text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleCapitalizeClick}>
            Capitalize Words
          </button>
          <button disabled= {text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleAlternatingClick}>
            Alternate Words
          </button>
          <button disabled= {text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleInverseClick}>
            Inverse Text
          </button>
          <button disabled= {text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleRemoveSpacesClick}>
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className="container my-2">
        <h2>Your Text Summary:</h2>
        <p>Word Count: {countWords(text)} | Character Count: {text.length} | Sentence Count: {countSentences(text)} | Line Count: {countLines(text)}</p>
        <p>{0.008 * text.split("").length} minutes read</p>
        <h2>Preview:</h2>
        <p>{text.length > 0 ? text : "Enter some text in the above textbox to preview it."}</p>
      </div>
    </>
  );
}
