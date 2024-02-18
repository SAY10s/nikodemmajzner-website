import Navbar from "./components/NavBar/Navbar";
import classes from "./App.module.scss";
import Homepage from "./components/Homepage";

function App() {
  return (
    <>
      <div className={classes.container}>
        <Navbar />
        <main>
          <Homepage />
          <div>
            <h1>Dalsza część</h1>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
