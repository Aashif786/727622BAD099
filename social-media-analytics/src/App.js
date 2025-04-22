import react from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Routes} from 'react-router-dom';
import TopUsers from './pages/TopUsers';
import Feed from './pages/Feed';
import TrendingPosts from './pages/TrendingPosts';
function App() {
  return (
    <div className="container py-4">
        <h1 className='text-center mb-4'> Social Media Analytics</h1>
        <nav>
            <NavLink to='/' className="btn btn-outline-primary me-2 mrg">Top Users</NavLink>
            <NavLink to='/trending' className = "btn btn-outline-primary me-2 mrg">Trending Posts</NavLink>
            <NavLink to='/feed' className = "btn btn-outline-primary me-2 mrg">Feed</NavLink>
        </nav>

        <Routes>
            <Route path='/' element={<TopUsers/>} />
            <Route path='/trending' element={<TrendingPosts/>} />
            <Route path='/feed' element={<Feed/>} />
        </Routes>
    </div>
  );
}

export default App;
