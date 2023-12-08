import { Route, Switch } from 'react-router-dom'

import FavoritesPage from './pages/Favorites';
import MeetupsPage from './pages/Meetups'
import NewMeetupsPage from './pages/NewMeetups'
import Layout from './components/layout/Layout';


function App() {
  return (
    <div>
      <Layout>
        <Switch>
        <Route exact path='/'>
          <MeetupsPage/>
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupsPage/>
        </Route>
        <Route path='/favorites'>
          <FavoritesPage/>
        </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
