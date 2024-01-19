import { Outlet } from 'react-router-dom';
import NavBar from '../components/nav-bar/index.js';
import 'h8k-components';

const title = "Navigation Bar";

function Layout() {
  return (
    <div>
      <h8k-navbar header={title} />
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Layout