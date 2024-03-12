import './App.css';
import s from './app.module.css'
import { fetchProduct } from './redux/slices/product';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import CardList from './components/product/cardList';
import Header from './components/header/index'
import Cart from './components/cart/index'

function App() {
  const dispatch = useDispatch()
  // const { products } = useSelector(state => state.product)
  //   const isLoading = products.status == 'loading'
 
  React.useEffect(() => {
    dispatch(fetchProduct()) 
    // console.log(products.status);
  },[])

  return (
    <>
      <Header/>
     <div className={s.mainContentposition}>
      <Cart/>
      <CardList/>
      </div> 
    </>
  );
}

export default App;
