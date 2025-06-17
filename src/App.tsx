import './App.css'
import ExternalData from './components/ExternalData';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Trainer from './components/Trainer';
import TrainerByID from './components/TrainerByID';
import QueryTrainer from './components/QueryTrainer';
import TrainerSearch from './components/TrainerSearch';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/externalData' element={<ExternalData />} />
        <Route path='/trainer' element={<Trainer name='JH' age={31} />} />
        <Route path="/trainerSearch" element={<TrainerSearch/>}/>
        <Route path='/trainerByID/:id' element={<TrainerByID />} />
        <Route path='/queryTrainer' element={<QueryTrainer />} />
        <Route path='/picExample' element={<QueryTrainer />} />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App
