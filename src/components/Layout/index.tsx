import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import * as S from './styles';
const Layout = () => {
  return (
    <S.Main className="main">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </S.Main>
  );
};

export default Layout;
