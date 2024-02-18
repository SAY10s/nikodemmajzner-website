import Navbar from "./components/NavBar/Navbar";
import classes from "./App.module.scss";
import Homepage from "./components/Homepage";
import "../public/background.png";

function App() {
  return (
    <>
      <div className={classes.container}>
        <Navbar />
        <main>
          <Homepage />
        </main>
      </div>
    </>
  );
}

export default App;
