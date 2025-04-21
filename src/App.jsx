import Blogfeed from './component/Blogfeed';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import AllArticles from './component/AllArticles';
import AddArticle from './component/AddArticle';
import Home from './component/Home';

// Dummy components for now
// const Home = () => <h2>Welcome to ReadItLater 📚</h2>;
// const AllArticles = () => <h2>All Saved Articles</h2>;
// const AddArticle = () => <h2>Add a New Article</h2>;

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<AllArticles />} />
          <Route path="/add" element={<AddArticle />} />
          <Route path="/news" element={<Blogfeed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;