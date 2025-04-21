import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddArticle = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [content, setContent] = useState(''); 
  const [isManual, setIsManual] = useState(false); // To toggle between URL and manual input
  const navigate = useNavigate();

  const saveArticle = () => {
    if (!title || (!url && !content)) {
      alert("Title and either URL or Content are required!");
      return;
    }

    // Create an article object
    const article = {
      title,
      savedAt: new Date().toISOString(),
      content: isManual ? content : null, // Save content if manual, else null
      url: isManual ? null : url, // Save URL if not manual, else null
    };

    // Retrieve saved articles from localStorage or initialize with empty array
    const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];
    savedArticles.push(article); // Add the new article
    localStorage.setItem('savedArticles', JSON.stringify(savedArticles)); // Save updated array back to localStorage

    navigate('/articles');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">➕ Add a New Article</h2>

      {/* Form to add article */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter the article title"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={isManual}
            onChange={() => setIsManual(!isManual)}
            className="mr-2"
          />
          <label className="text-sm font-semibold">Manually write the article content</label>
        </div>

        {!isManual && (
          <div>
            <label className="block text-sm font-semibold">URL of the Article:</label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter article URL"
            />
          </div>
        )}

        {isManual && (
          <div>
            <label className="block text-sm font-semibold">Article Content:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              rows="6"
              placeholder="Write the full article here..."
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          onClick={saveArticle}
          className="w-full bg-pink-600 text-white p-2 rounded hover:bg-pink-700"
        >
          Save Article
        </button>
      </div>
    </div>
  );
};

export default AddArticle;
