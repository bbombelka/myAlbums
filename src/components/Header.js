import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <Fragment>
      <div className="nav navbar navbar-expand-lg navbar-dark bg-info">
        {' '}
        <Link to="/">
          <div className="container">
            <h2 className="nav navbar-brand">My Albums</h2>
            <i className="text-white fas fa-compact-disc" />
          </div>
        </Link>
        <div className="float-right ml-auto">
          <span>Add album</span>
          <Link style={{ cursor: 'pointer', color: 'white' }} to="/AddAlbum">
            <i className="fas fa-plus mx-2" />
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
