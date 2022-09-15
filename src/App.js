import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './components/pages/Home'
import NewsPage from './components/pages/News'
import ContactPage from './components/pages/Contact'

function App() {

  return (
    <div className="App" style={{ padding: 20 }}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
