import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = (props) => {
  const containerStyle = {
    backgroundColor: props.mode === 'dark' ? 'rgb(5, 20, 42)' : 'rgb(67, 152, 236)',
    color: props.mode === 'dark' ? 'white' : 'black',
  };

  const featuresContainerStyle = {
    backgroundColor: props.mode === 'dark' ? 'rgb(5, 20, 42)' : 'rgb(67, 152, 236)',
    color: props.mode === 'dark' ? 'white' : 'black',
    padding: '10px',
    borderRadius: '5px',
  };

  const featureItemStyle = {
    backgroundColor: props.mode === 'dark' ? 'black' : 'white',
    color: props.mode === 'dark' ? 'white' : 'black',
    border: props.mode === 'dark' ? '1px solid white' : '1px solid black',
  };

  return (
    <div className="container mt-5" style={containerStyle}>
      <div className="card shadow-lg" style={{ backgroundColor: 'inherit' }}>
        <div className="card-header" style={{ backgroundColor: 'inherit', color: containerStyle.color }}>
          <h1 className="text-center">About TextMaster</h1>
        </div>
        <div className="card-body" style={{ color: containerStyle.color }}>
          <p className="card-text">
            Welcome to <strong>TextMaster</strong>, your ultimate tool for text manipulation and analysis. Created in 2024, TextMaster provides a range of features designed to make working with text easier and more efficient.
          </p>
          <div className="container" style={featuresContainerStyle}>
            <h2 className="mt-4 mb-3">Key Features:</h2>
            <ul className="list-group">
              <li className="list-group-item" style={featureItemStyle}><strong>Uppercase:</strong> Convert your text to uppercase.</li>
              <li className="list-group-item" style={featureItemStyle}><strong>Lowercase:</strong> Convert your text to lowercase.</li>
              <li className="list-group-item" style={featureItemStyle}><strong>Capitalize First Word:</strong> Capitalize the first word of each sentence.</li>
              <li className="list-group-item" style={featureItemStyle}><strong>Inverse Letters:</strong> Reverse the letters in your text.</li>
              <li className="list-group-item" style={featureItemStyle}><strong>Alternate Text:</strong> Apply alternating case to your text.</li>
              <li className="list-group-item" style={featureItemStyle}><strong>Remove Extra Spaces:</strong> Eliminate unnecessary spaces from your text.</li>
              <li className="list-group-item" style={featureItemStyle}><strong>Copy Text:</strong> Easily copy text to your clipboard.</li>
              <li className="list-group-item" style={featureItemStyle}><strong>Clear Text:</strong> Remove all text for a fresh start.</li>
              <li className="list-group-item" style={featureItemStyle}><strong>Count Words:</strong> Get the total number of words in your text.</li>
              <li className="list-group-item" style={featureItemStyle}><strong>Count Characters:</strong> Determine the number of characters in your text.</li>
              <li className="list-group-item" style={featureItemStyle}><strong>Count Sentences:</strong> Calculate the number of sentences.</li>
              <li className="list-group-item" style={featureItemStyle}><strong>Count Lines:</strong> Find out how many lines your text contains.</li>
              <li className="list-group-item" style={featureItemStyle}><strong>Preview Text:</strong> View a live preview of your text as you make changes.</li>
            </ul>
          </div>
          <p className="mt-4">
            TextMaster is designed to support both light and dark modes, allowing you to work comfortably in any lighting condition. Whether you're editing, analyzing, or simply viewing text, TextMaster offers the tools you need for a seamless experience.
          </p>
        </div>
        <div className="card-footer text-center" style={{ backgroundColor: 'inherit', color: containerStyle.color }}>
          <p className="mb-0">&copy; 2024 TextMaster. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
