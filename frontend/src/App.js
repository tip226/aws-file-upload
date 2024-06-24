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
          
      </form>
    </div>
  );
}

export default App;
