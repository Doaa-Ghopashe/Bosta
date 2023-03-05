import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import HomePg from './Pages/HomePg';
import ChatBox from './Components/ChatBox';
import Footer from './Components/Footer';
import { Routes ,Route } from 'react-router-dom';
import ChatPg from './Pages/ChatPg';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePg/>
      <ChatBox/>
      <Routes>
        <Route path="/chat" element={<ChatPg />}/>
      </Routes>
      
      
      <Footer/>
    </div>
  );
}

export default App;
