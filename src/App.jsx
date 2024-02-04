import { RecoilRoot } from 'recoil';
import Search from './components/Search';
import Profile from './components/Profile';

function App() {
  return (
    <div>
      <RecoilRoot>
        <div className="main">
          <h2>Github Profile Card</h2>
          <Search />
          <Profile />
        </div>
      </RecoilRoot>
    </div>
  );
}

export default App;
