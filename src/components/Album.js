import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import { Link } from 'react-router-dom';

class Album extends React.Component {
  onDeleteClick = async (id, dispatch) => {
    if (window.confirm('Are you sure?')) {
      await fetch(`http://localhost:4000/albums/${id}`, {
        method: 'DELETE',
      }).then(res => dispatch({ type: 'deleteAlbum', payload: id }));
    }
  };

  render() {
    const { img, artist, album, id } = this.props;
    const imageContainer = {
      width: '100%',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
    };

    return (
      <Consumer>
        {value => {
          return (
            <Fragment>
              <div
                id={id}
                className="card d-flex m-4 bg-light"
                style={{
                  flexBasis: '260px',
                  height: '240px',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <Link to={`/EditAlbum/album/${id}`}>
                  <i
                    style={{
                      position: 'absolute',
                      right: 30,
                      top: 10,
                      cursor: 'pointer',
                      zIndex: '1',
                    }}
                    className="fas fa-edit"
                  />
                </Link>
                <i
                  style={{
                    position: 'absolute',
                    right: 10,
                    top: 10,
                    cursor: 'pointer',
                    zIndex: '1',
                  }}
                  className="far fa-trash-alt"
                  onClick={this.onDeleteClick.bind(this, id, value.dispatch)}
                />
                <div style={{ width: 'auto', height: '75%' }} className="art">
                  <div style={imageContainer} className="image-container">
                    <img
                      src={img}
                      alt="album label"
                      style={{
                        display: 'block',
                        width: 'auto',
                        height: '90%',
                        position: 'absolute',
                        top: '5%',
                        left: '5%',
                      }}
                    />
                  </div>{' '}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}
                  className="info"
                >
                  <h6 className="text-primary mx-2">{artist}</h6>

                  <h6 className="text-secondary mx-2">{album}</h6>
                </div>
              </div>
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Album;

Album.propTypes = {
  img: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
};
