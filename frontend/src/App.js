import React, { useState } from 'react';
import './App.css';
import './index.css';
import { Amplify } from 'aws-amplify';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
import { uploadData } from "aws-amplify/storage";

Amplify.configure(awsconfig);

function App({ signOut }) {
  const [inputText, setInputText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleTextChange = (e) => setInputText(e.target.value);
  const handleFileChange = (e) => setSelectedFile(e.target.files[0]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedFile) {
      try {
        const result = await uploadData({
          key: selectedFile.name,
          data: selectedFile,
          options: {
            contentType: selectedFile.type
          }
        }).result;
        
        console.log('Succeeded: ', result);
        setInputText('');
        setSelectedFile(null);
        alert('File uploaded successfully!');
      } catch (error) {
        console.log('Error : ', error);
        alert('Error uploading file. Please try again.');
      }
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div>
      <Heading level={1}>Thank you for doing verification</Heading>
      <Heading level={2}>My Content</Heading>
      <Button onClick={signOut}>Sign out</Button>
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
            <div className="flex items-center justify-between">
              <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withAuthenticator(App);