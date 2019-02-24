import React, { Component } from 'react';
import Input from './Input';
import { Consumer } from './Context';

class EditAlbum extends Component {
  state = {
    artist: '',
    album: '',
    image: '',
  };

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  cancel = () => this.props.history.goBack();

  componentDidMount() {
    fetch(`http://localhost:4000/albums/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        const { artist, album, id, image } = data;
        this.setState({
          artist: artist,
          album: album,
          image: image,
          id: id,
        });
      });
  }

  editAlbum = (dispatch, e) => {
    e.preventDefault();
    const { artist, album, id, image } = this.state;
    fetch(`http://localhost:4000/albums/${this.props.match.params.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        artist: artist,
        album: album,
        id: id,
        image: image,
      }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }).then(res => res.json());

    dispatch({ type: 'updateAlbum', payload: this.state });

    this.props.history.push('/');
  };

  render() {
    const { album, artist, image } = this.state;

    return (
      <Consumer>
        {value => {
          return (
            <div className="card m-5">
              <div className="card-header bg-info">
                <h3 style={{ display: 'inline-block' }} className="card-title text-white">
                  Add new album
                </h3>
                <i
                  onClick={this.cancel}
                  class="fas fa-times text-white float-right"
                  style={{ cursor: 'pointer', fontSize: '2rem' }}
                />
              </div>
              <div className="card-body">
                <form className="form-group ">
                  <Input
                    label="artist"
                    value={artist}
                    placeholder="Here goes the artist"
                    name="artist"
                    onChange={this.inputHandler}
                  />
                  <Input
                    label="album"
                    value={album}
                    placeholder="Here goes the album"
                    name="album"
                    onChange={this.inputHandler}
                  />
                  <Input
                    label="image"
                    value={image}
                    placeholder="Here goes the URL for CD Art"
                    name="image"
                    onChange={this.inputHandler}
                  />
                  <input
                    className="btn btn-info m-3 mr-auto"
                    value="Update album data"
                    type="submit"
                    onClick={this.editAlbum.bind(this, value.dispatch)}
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditAlbum;
