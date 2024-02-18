import Navbar from "./components/NavBar/Navbar";
import classes from "./App.module.scss";

function App() {
  return (
    <>
      <div className={classes.container}>
        <Navbar />
      </div>
    </>
  );
}

export default App;
