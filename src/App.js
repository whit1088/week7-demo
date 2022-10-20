import React, { useState, useEffect } from 'react';
import './App.css';
import Container from '@mui/material/Container';
import Header from './components/Header';
import Card from './components/Card';

function App() {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, [])

  return (
    <div className='App'>
      <Container>
        <Header />
        <Card data={data}/>
      </Container>
    </div>
  );
}

export default App;
