import { Outlet } from 'react-router-dom';
import { Nav } from './Nav';

export const Main = () => (
  <>
    <Nav></Nav>
    <Outlet />
  </>
);
