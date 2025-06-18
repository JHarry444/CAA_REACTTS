import './App.css'
import ExternalData from './components/ExternalData';
import Footer from './components/misc/Footer';
import Header from './components/misc/Header';
import HomePage from './components/misc/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Trainer from './components/misc/Trainer';
import TrainerByID from './components/TrainerByID';
import QueryTrainer from './components/routing/QueryTrainer';
import TrainerSearch from './components/routing/TrainerSearch';
import Counter from './components/state/Counter';
import { useState } from 'react';
import PicExample from './components/misc/PicExample';
import TrainerContainer from './components/lifting_state/TrainerContainer';

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div className={theme}>
      <Router>
        <Header />
        <button onClick={() => setTheme(currentTheme => currentTheme === "dark" ? "light" : "dark")}>Toggle theme</button>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/externalData' element={<ExternalData />} />
          <Route path='/trainer' element={<Trainer name='JH' age={31} />} />
          <Route path="/trainerSearch" element={<TrainerSearch />} />
          <Route path='/trainerByID/:id' element={<TrainerByID />} />
          <Route path='/queryTrainer' element={<QueryTrainer />} />
          <Route path='/trainerSearch' element={<TrainerSearch />} />
          <Route path='/picExample' element={<PicExample />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/liftingState' element={<TrainerContainer />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
