import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import View from '../../routes/Routers';
import Carts from '../UI/cart/Carts';
import { useSelector } from 'react-redux';

const Layout = () => {
  const showCart = useSelector(state => state.CartUi.cartIsVisible);

  return (
    <>
        <Header />
        { showCart && <Carts /> }
            <main>
                <View />
            </main>
        <Footer />
    </>
  )
}

export default Layout;
