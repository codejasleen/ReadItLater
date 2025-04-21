import React, { useEffect, useState } from 'react';

const AllArticles = () => {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    // Retrieve articles from localStorage
    const stored = JSON.parse(localStorage.getItem("savedArticles")) || [];
    setSavedArticles(stored);
  }, []);

  const deleteArticle = (url) => {
    // Filter out the article with the matching URL
    const filtered = savedArticles.filter(article => article.url !== url);
    setSavedArticles(filtered);
    localStorage.setItem("savedArticles", JSON.stringify(filtered));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">📚 Saved Articles</h2>
      {savedArticles.length === 0 ? (
        <p>No articles saved yet.</p>
      ) : (
        <ul className="space-y-4">
          {savedArticles.map((article, index) => (
            <li key={index} className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-medium">{article.title}</h3>
              <p className="text-sm text-gray-600">
                Saved on: {new Date(article.savedAt).toLocaleString()}
              </p>

              {/* Display the URL if available */}
              {article.url && (
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Read Full Article
                </a>
              )}

              {/* Display the manual content if available */}
              {article.content && (
                <div className="mt-4">
                  <h4 className="font-semibold">Article Content:</h4>
                  <p>{article.content}</p>
                </div>
              )}

              {/* Delete Button */}
              <button
                onClick={() => deleteArticle(article.url)}
                className="mt-2 px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllArticles;
