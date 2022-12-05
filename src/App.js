import './App.css';

import Main from './Layouts/Main/Main';
import SideBar from './Layouts/SideBar/SideBar';
import Tools from './Layouts/Tools/Tools';

export default function App() {
  return (
    <div className='App'>
      <SideBar />
      <Tools />
      <Main />
    </div>
  );
}
