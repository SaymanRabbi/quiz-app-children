import '../Styles/App.css';
import Layout from './Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Singup from './Pages/Singup';


function App() {
  return (
    <>
      <Layout>
        {/* <Home/> */}
        {/* <Singup/> */}
        <Login/>
     </Layout>
    </>
  );
}

export default App;
