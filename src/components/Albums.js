import React, { Component } from 'react';
import { Consumer } from './Context';
import Album from './Album';
import Spinner from './Spinner';

class Albums extends Component {
  render() {
    const containerStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      flexFlow: 'row wrap',
      justifyContent: 'space-evenly',
      alignItems: 'flex-end',
    };

    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              {value.albums.length === 0 ? (
                <Spinner />
              ) : (
                <div style={containerStyle}>
                  {value.albums.map(album => (
                    <Album
                      key={album.id}
                      id={album.id}
                      artist={album.artist}
                      album={album.album}
                      img={album.image}
                    />
                  ))}
                </div>
              )}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Albums;
