import '../src/SideNav.css';

const Nav = () => {
  return (
    <>
      <div class='sidenav'>
        <a href='#dashboard'>Dashboard</a>
        <a href='#widget'>Widget</a>
        <a href='#reviews'>Reviews</a>
        <a href='#customers'>Customers</a>
        <a href='#analysis'>Online Analysis</a>
        <a href='#settings'>Settings</a>
      </div>
    </>
  );
};

export default Nav;