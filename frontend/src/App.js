import React, { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleTextChange = (e) => setInputText(e.target.value);
  const handleFileChange = (e) => setSelectedFile(e.target.files[0]);
}

export default App;
