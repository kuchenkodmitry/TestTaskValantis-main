import React, { useEffect, useState } from 'react'
import {Navigate, Route, Routes } from 'react-router-dom'
import PostsPage from './pages/posts'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/1'/>}></Route>
      <Route path='/:id' element={<PostsPage/>}/>
    </Routes>
  );
}

export default App;
