import './css/style.css';
import { Outlet } from 'react-router-dom';
import { Header } from './components/organisms/Header/Header';
import { HEADER_ITEMS } from './constants/header.constants';

export const App = () => {
  return (
    <>
      <Header items={HEADER_ITEMS} />
      <main role="main" className="main">
        <Outlet />
      </main>
    </>
  );
};
