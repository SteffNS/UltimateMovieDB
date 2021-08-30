//components
import Header from "./components/Header";
import Footer from "./components/Footer";

//dev components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


//pages
import PageHome from './pages/PageHome.js'
import PageAbout from './pages/PageAbout.js'
import PageFavourite from './pages/PageFavourite.js'
import PageNotFound from './pages/PageNotFound.js'
import PageSingle from "./pages/PageSingle";


function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main>
          <Switch>
            <Route path='/' exact><PageHome sort='popular' /></Route>
            <Route path='/sort/popular'><PageHome sort='popular'/></Route>
            <Route path='/sort/toprated'><PageHome sort='top_rated'/></Route>
            <Route path='/sort/nowplaying'><PageHome sort='now_playing'/></Route>
            <Route path='/sort/upcoming'><PageHome sort='upcoming'/></Route>
            <Route path='/about'><PageAbout /></Route>
            <Route path='/favourite'><PageFavourite /></Route>
            <Route path='/movie/:id'><PageSingle /></Route>
            <Route><PageNotFound /></Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
