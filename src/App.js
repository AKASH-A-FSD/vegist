
import './App.css';
import Dishes from './Components/Dishes/Dishes';
// import Learn from './Components/Learn';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Dishes/>
      {/* <Learn/> */}
    </div>
  );
}

export default App;
