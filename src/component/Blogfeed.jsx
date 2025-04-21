import React, { useState, useEffect } from 'react';
const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

const Blogfeed = () => {
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState("technology");

  // Save article to localStorage
  const saveArticle = (article) => {
    const saved = JSON.parse(localStorage.getItem("savedArticles")) || [];
    const isAlreadySaved = saved.some(a => a.url === article.url);
    
    if (!isAlreadySaved) {
      saved.push({ ...article, savedAt: new Date().toISOString() });
      localStorage.setItem("savedArticles", JSON.stringify(saved));
      alert("Article saved!");
    } else {
      alert("Article already saved.");
    }
  };

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch(`https://gnews.io/api/v4/top-headlines?lang=en&topic=${topic}&token=${API_KEY}`);
      const data = await res.json();
      setArticles(data.articles || []);
    };

    fetchArticles();
  }, [topic]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">📰 Latest News</h2>

      {/* Filter Dropdown */}
      <div className="mb-6">
        <label className="mr-2 font-semibold">Filter by Topic:</label>
        <select 
          value={topic} 
          onChange={(e) => setTopic(e.target.value)} 
          className="p-2 rounded border border-gray-300"
        >
          <option value="technology">Technology</option>
          <option value="sports">Sports</option>
          <option value="business">Business</option>
          <option value="science">Science</option>
          <option value="entertainment">Entertainment</option>
          <option value="world">World</option>
        </select>
      </div>

      {/* Articles List */}
      <ul className="space-y-4">
        {articles.map((article, index) => (
          <li key={index} className="bg-white p-4 rounded shadow">
            <a 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-700 text-lg font-medium hover:underline"
            >
              {article.title}
            </a>
            <p className="text-sm text-gray-600">{new Date(article.publishedAt).toLocaleString()}</p>

            {/* Save Button */}
            <button
              onClick={() => saveArticle(article)}
              className="mt-2 px-3 py-1 bg-pink-600 text-white text-sm rounded hover:bg-pink-700"
            >
              Save
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogfeed;
