import React from 'react';

import { Footer, Blog, Header,MyContent,Space,Products,About,Artist,Users,Cart,Login,ArtistBlog ,SpaceBlog } from './containers';
import { Brand, Navbar, Carousel } from './components';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        
        {/* <Header /> */}
        <MyContent>
          <Routes>
            <Route index element={<Carousel />} /> 
            {/* <Route index element={<Header />} /> */}
          </Routes>
          <Routes>
            <Route path='/' element={<Blog />} />
            <Route path='space' element={<Space />} />
            <Route path='products' element={<Products />} />
            <Route path='about' element={<About />} />
            <Route path='artist' element={<Artist />} />
            <Route path='users' element={<Users />} />            
            <Route path='/users/login' element={<Login />} />            
            <Route path='cart' element={<Cart />} />
          </Routes>  
        </MyContent>
      </div>
        <Brand />
        <Routes>
          <Route path='artistblog' element={<ArtistBlog />} />
          <Route path='spaceblog' element={<SpaceBlog />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    
  )
}
  

export default App;
