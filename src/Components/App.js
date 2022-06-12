import '../Styles/App.css';
import Layout from './Layout';
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';
import Login from './Pages/Login';
import Singup from './Pages/Singup';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './RequireAuth';
import { useState } from 'react';


function App() {
  const [result,setResult]=useState([])
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/signup' element={<Singup/>}></Route>
          <Route path='/login' element={ <Login/>}></Route>
          <Route path='/quiz/:id' element={<RequireAuth>
            <Quiz setResult={setResult} />
          </RequireAuth>}></Route>
          <Route path='/result/:id' element={<RequireAuth>
            <Result result={result} />
          </RequireAuth>}></Route>
        </Routes>
     </Layout>
    </>
  );
}

export default App;
