import './App.css';
import NavBar from './NavBar/NavBar';
import Navigator from './Navigator/Navigator';
import useStyles from './MaterialStyle/AppStyle';

function App() {

  const classes = useStyles()

  return (
    <div className="App">
      <header className="App-header">
      <NavBar></NavBar>
      </header>
      <footer className={classes.root}>
        <Navigator/>
      </footer>
    </div>
  );
}

export default App;
