import Routes from "./routes/Routes";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
