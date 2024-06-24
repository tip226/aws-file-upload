import React, { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleTextChange = (e) => setInputText(e.target.value);
  const handleFileChange = (e) => setSelectedFile(e.target.files[0]);
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto p-4 bg-pink-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2 border-pink-300">
        <div className="mb-4">
          <label className="block text-pink-700 text-sm font-bold mb-2" htmlFor="text">Text input:</label>
          <input
            type="text"
            id="text"
            value={inputText}
            onChange={handleTextChange}
            className="shadow appearance-none border border-pink-300 rounded w-full py-2 px-3 text-pink-700 leading-tight focus:outline-none focus:shadow-outline focus:border-pink-500"
          />
          <div className="mb-4">
            <label className="block text-pink-700 text-sm font-bold mb-2" htmlFor="file">File input:</label>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              className="shadow appearance-none border border-pink-300 rounded w-full py-2 px-3 text-pink-700 leading-tight focus:outline-none focus:shadow-outline focus:border-pink-500"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
