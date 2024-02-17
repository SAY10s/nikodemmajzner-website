import Navbar from "./components/Navbar";
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
