import './index.css';
import React, { useEffect, useState } from "react"
import Nav from "./components/Nav"
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home';
import Books from './pages/Books';
import {books} from "./data"
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';


function App() {
  const [cart,setCart] = useState([]);

  function addToCart(book){
    setCart([...cart,{...book,quantity:1}])
  }

  function changeQuantity(book,quantity){
    setCart(cart.map(item => item.id === book.id
        ? {
          ...item,
          quantity: +quantity,
        }: item
    ))
  }
  function removeItem(item){
    setCart(cart.filter(book => book.id !== item.id))
  }
  function numberOfItems(){
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity;
    })
    return counter;
  }
  useEffect(() => {
    console.log(cart);
  },[cart])

  // function addToCart(book){
  //   const dupeItem = cart.find(item => +item.id === +book.id)
  //   if(dupeItem){
  //     setCart(cart.map(item => {
  //       if(item.id === dupeItem.id){
  //         return {
  //           ...item,
  //           quantity: item.quantity+1
  //         }
  //       }else{
  //         return item;
  //       }
  //     })) 
  //   }else{
  //     setCart([...cart,{...book,quantity:1}]);
  //   }
  // }
  // useEffect(() => {
  //   console.log(cart);
  // },[cart]);

  return (
    <Router>
      <div className='App'>
        <Nav numberOfItems = {numberOfItems()}/>
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books  books = {books} key={books.id} />}/>           
        <Route path="/books/:id" render={() => <BookInfo cart={cart} books = {books} key={books.id} addToCart = {addToCart} />}/>      
        <Route path="/cart" render={() => <Cart cart={cart}  books = {books} key={books.id} changeQuantity = {changeQuantity} removeItem = {removeItem} />}/>      
        <Footer />
      </div>
    </Router>
  );
}

export default App;
