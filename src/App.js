import logo from './logo.svg';
import './App.css';
import ProfileData from "./components/ProfileData";
import NavMain from "./components/navbar/NavMain"
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <NavMain />
      <ProfileData />
      <Footer />
    </div>
  );
}

export default App;
