import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial = true

function App() {

 const dispatch = useDispatch()
 const showCart = useSelector(state => state.ui.cartIsVisible)
 const cart = useSelector(state => state.cart)
 const notification = useSelector(state => state.ui.notification)

 useEffect(() => {
  async function sendCartData() {
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'sending',
      message: 'sending cart data'
    }))
   const response = await fetch('https://foor-order-app-cb6b9-default-rtdb.firebaseio.com/cart.json', 
   {method: 'PUT', 
   body: JSON.stringify(cart)
  })

  if (!response.ok) {
    throw new Error('Sending cart data failed')
  }

  dispatch(uiActions.showNotification({
    status: 'success',
    title: 'Success',
    message: 'Sending cart data sussessfully'
  }))

  if (isInitial) {
    isInitial= false;
    return;
  }

  sendCartData().catch(error => {
    dispatch(uiActions.showNotification({
      status: 'ERROR',
      title: 'ERROR',
      message: 'ERROR'
    }))
  })
}} ,[cart, dispatch])
  
  return (
    <>
    {notification && <Notification 
    status={notification.status}
    title={notification.title}
    message={notification.message}
    />}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
