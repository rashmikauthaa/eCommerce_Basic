import { Route, Routes } from 'react-router-dom';
import Header from './Header';  // Fixed import name
import { BrowserRouter } from 'react-router-dom';
// import Login from './Login';  // Import your other components
// import AddProduct from './AddProduct'; // Example
// import UpdateCart from './UpdateCart'; // Example
// import SignUp from './SignUp'; // Example

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/update-cart" element={<UpdateCart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
