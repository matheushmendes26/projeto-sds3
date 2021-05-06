import NavBar from "components/NavBar";
import Footer from "components/Footer";
import Datatable from "components/Datatable";

function App() {
  return (
    <>
      <NavBar />
      <div className = "container">
        <h1 className="text-primary">Olá mundo!</h1>
        <Datatable />
      </div>
      <Footer />
    </>
  );
}

export default App;
