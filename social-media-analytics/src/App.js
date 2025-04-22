import react from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TopUsers from './pages/TopUsers';
import Feed from './pages/Feed';
import TrendingPosts from './pages/TrendingPosts';
function App() {
  return (
    <div className="container py-4">
        <h1 className='text-center mb-4'> Social Media Analytics</h1>
        <nav>
            <NavLink to='/' className="btn btn-outline-primary me-2">Top Users</NavLink>
            <NavLink to='/trending' className = "btn btn-outline-success me-2">Trending Posts</NavLink>
            <NavLink to='/feed' className = "btn btn-outline-info">Feed</NavLink>
        </nav>

        <Router>
            <Route path='/' element={<TopUsers/>} />
            <Route path='/trending' element={<TrendingPosts/>} />
            <Route path='/feed' element={<Feed/>} />
        </Router>
    </div>
  );
}

export default App;
