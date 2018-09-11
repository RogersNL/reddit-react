import React from 'react';
import { Link } from 'react-router-dom';
function Header(){
  return (
    <div>
      <nav className="navbar navbar-default bg-light">
        <div className="navbar-header navbar-brand">
          <Link to='/'>Reddit</Link>
        </div>
        <ul className="navbar-nav nav-pills">
          <li className="nav-item"><Link className="nav-link" to='/newpost'>Write Post</Link></li>
        </ul>
      </nav>
      <style jsx>{`
        nav {
          border-bottom: 1px solid black;
        }
        li {
          display: block;
          float: left;
        }
        ul {
          list-style-type: none;
        }
      `}</style>
    </div>
  );
}

export default Header;
