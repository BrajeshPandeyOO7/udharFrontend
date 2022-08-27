import './App.css';
import NavBar from './NavBar/NavBar';
import Navigator from './Navigator/Navigator';
import useStyles from './MaterialStyle/AppStyle';
import Home from './HomePage/Home';

function App() {

  const classes = useStyles()

  return (
    <div className="App">
      <header className="App-header">
      <NavBar></NavBar>
      </header>
      <div>
        <Home/>
      </div>
      <footer className={classes.root}>
        <Navigator/>
      </footer>
    </div>
  );
}

export default App;
