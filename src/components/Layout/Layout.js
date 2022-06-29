import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import View from '../../routes/Routers';

const Layout = () => {
  return (
    <>
        <Header />
            <main>
                <View />
            </main>
        <Footer />
    </>
  )
}

export default Layout;