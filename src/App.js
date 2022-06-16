import './App.css';
import {Routes, Route } from 'react-router-dom'
// import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import FeatureProducts from './components/FeatureProducts';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import Details from './components/Details';
import Admin from './components/Admin';
import React from 'react';
import Profile from './components/Profile';
import { AuthProvider } from './components/auth';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth';

const LazyAbout  = React.lazy(() => import('./components/About'));

const App = () =>  {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route 
          path='about' 
          element = {
            <React.Suspense fallback='Loading...'>
                 <LazyAbout />
            </React.Suspense>
          } 
        />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path="products" element={<Products />} />
        <Route path='products' element={<Products />}>
          <Route index  element={<FeatureProducts />} />
          <Route path='featured' element={<FeatureProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path='users' element={<Users />}>
          <Route path=':userId' element={<Details />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route 
          path='profile' 
          element={ <RequireAuth> <Profile /> </RequireAuth>} 
        />
        <Route path='login' element={<Login />} />
        <Route path="*" element={<NoMatch />}  />
       </Routes>
    </AuthProvider>
  );
}

export default App;
