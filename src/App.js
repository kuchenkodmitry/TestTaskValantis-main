import logo from './logo.svg';
import './App.css';
import { fetchProduct } from './redux/slices/product';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import CardList from './components/product/cardList';
import Header from './components/header/index'

function App() {
  const dispatch = useDispatch()
  // const { products } = useSelector(state => state.product)
  //   const isLoading = products.status == 'loading'
 
  React.useEffect(() => {
    dispatch(fetchProduct()) 
    // console.log(products.status);
  },[])

  return (
    <div >
      <Header/>
      <CardList/>
    </div>
  );
}

export default App;
