import { Shop } from "./components/Shop"
import { Nav } from "./components/Nav"
import { Home } from "./components/Home"
import { Cart } from "./components/Cart"
import { ItemDetail } from "./components/ItemDetail"
import { BrowserRouter as  Switch, Route, HashRouter } from "react-router-dom"
import "./App.css"
import { useState, useEffect } from "react"


function App() {

  const [cart, changeCart] = useState([]);
  const [total, updateTotal] = useState(0);

  const items = ["Hat", "T-Shirt", "Jeans", "Tie", "Trainers", "Jumper", "Hoodie", "Socks", "Fleece"]
  const prices =[10.99,3.99,20.99,4.99,100.99,30.99,7.99,8.99,9.99,10.99]
  const id=[0,1,2,3,4,5,6,7,8]
  const both= []

  function addToCart(name, price){
  
    for (let i = 0;i < cart.length; i++){

      if (cart[i].name === name){

        const clone = [...cart];
        clone[i].amount = clone[i].amount + 1;
        changeCart(clone)
        return
      }

    }
    changeCart([...cart, {name: name, amount: 1, price: price}])
  }

  function changeTotal(){
    let a = 0
    for(let i = 0; i < cart.length; i++){
      a = a + cart[i].price * cart[i].amount
    }
    updateTotal(a);
  }

  useEffect(changeTotal,[cart]);

  items.forEach((x,i)=>{
      let obj = {};
      obj.name = x;
      obj.price = prices[i];
      obj.id = id[i]
      both.push(obj);
  })

  return (
    <div>
      <HashRouter basename="/">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/shop" exact>
            <Shop both = {both} />
          </Route>
          <Route 
          path="/cart" 
          render={(props)=> <Cart {...props} cart={cart} total={total} changeCart = {changeCart} changeTotal={changeTotal}/>}
          />
          <Route 
          path="/shop/:id" 
          render={(props) => <ItemDetail {...props} both = {both} addToCart={addToCart} changeTotal={changeTotal}/>}
          />
         </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
