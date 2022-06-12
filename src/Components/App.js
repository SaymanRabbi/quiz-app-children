import '../Styles/App.css';
import Layout from './Layout';
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';
import Login from './Pages/Login';
import Singup from './Pages/Singup';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './RequireAuth';


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/signup' element={<Singup/>}></Route>
          <Route path='/login' element={ <Login/>}></Route>
          <Route path='/quiz' element={<RequireAuth>
            <Quiz/>
          </RequireAuth>}></Route>
          <Route path='/result' element={<RequireAuth>
            <Result />
          </RequireAuth>}></Route>
        </Routes>
     </Layout>
    </>
  );
}

export default App;
