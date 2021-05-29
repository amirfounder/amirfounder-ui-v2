import { Route, Switch } from 'react-router';
import PathConstants from '../../utils/PathsConstants';
import { useMainContext } from '../../context/MainContext';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import ErrorNotFound from '../pages/error-not-found/ErrorNotFound';
import Home from '../pages/home/Home';

function App() {

  const {
    setCurrentMousePosition
  } = useMainContext();

  const handleMouseMove = (e) => {
    setCurrentMousePosition({
      x: e.clientX,
      y: e.clientY
    })
  }

  return (
    <div onMouseMove={handleMouseMove}>
      <Header />
      <Switch>
        <Route exact path={PathConstants.HOME} component={Home} />
        <Route path="404-error" component={ErrorNotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
