// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage'
import Navigation from "./components/Navigation";
import AddNewPage from './pages/AddNewPage ';
import DetailNotePage from './pages/DetailNotePage';

function App() {
  return (
    <>
      <header>
       <Navigation/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/new" element={<AddNewPage/>} />
          <Route path="*" element={<NotFoundPage/>}/>
          <Route path="/notes/:id" element={<DetailNotePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
