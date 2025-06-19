import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import BlogDetails from './components/BlogDetails';
import CreatePage from './components/CreatePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
          </Routes>
        </main>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
