import React, { Component } from 'react';
import Input from './Input';
import { Consumer } from './Context';

class AddAlbum extends Component {
  state = {
    artist: '',
    album: '',
    image: '',
    errors: {},
    submitIsEnabled: false,
    touched: {
      artist: false,
      album: false,
      image: false,
    },
  };

  onFocusHandler = e => {
    this.setState({
      touched: { ...this.state.touched, [e.target.name]: true },
    });
  };

  onBlurHandler = e => {
    if (this.state[e.target.name].length < 2 && this.state.touched[e.target.name]) {
      this.setState({
        errors: { ...this.state.errors, [e.target.name]: `${e.target.name} is required` },
      });
    } else {
      this.setState({
        errors: { ...this.state.errors, [e.target.name]: null },
      });
    }
  };

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.submitValidator();
  };

  submitValidator = () => {
    if (
      this.state.album.length > 2 &&
      this.state.artist.length > 2 &&
      this.state.image.length > 2
    ) {
      this.setState({
        submitIsEnabled: true,
      });
    } else {
      this.setState({
        submitIsEnabled: false,
      });
    }
  };

  cancel = () => this.props.history.goBack();

  addAlbum = (dispatch, e) => {
    e.preventDefault();
    const { artist, album, image } = this.state;
    fetch('http://localhost:4000/albums', {
      method: 'POST',
      body: JSON.stringify({ artist: artist, album: album, image: image }),
      headers: {
        'Content-type': 'application/json',
      },
    }).then(res => {
      res.json();
    });
    dispatch({ type: 'addAlbum', payload: this.state });
    this.props.history.push('/');
  };

  render() {
    const { album, artist, image, submitIsEnabled, errors } = this.state;

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
                  className="fas fa-times text-white float-right"
                  style={{ cursor: 'pointer', fontSize: '2rem' }}
                />
              </div>
              <div className="card-body">
                <form className="form-group ">
                  <Input
                    label="artist"
                    value={artist}
                    placeholder="Artist name..."
                    name="artist"
                    onChange={this.inputHandler}
                    onFocus={this.onFocusHandler}
                    onBlur={this.onBlurHandler}
                    error={errors.artist}
                    onKeyUp={this.submitValidator}
                  />
                  <Input
                    label="album"
                    value={album}
                    placeholder="Album name.."
                    name="album"
                    onChange={this.inputHandler}
                    onFocus={this.onFocusHandler}
                    onBlur={this.onBlurHandler}
                    error={errors.album}
                    onKeyUp={this.submitValidator}
                  />
                  <Input
                    label="image"
                    value={image}
                    placeholder="URL for CD art"
                    name="image"
                    onChange={this.inputHandler}
                    onFocus={this.onFocusHandler}
                    onBlur={this.onBlurHandler}
                    error={errors.image}
                    onKeyUp={this.submitValidator}
                  />
                  <input
                    className="btn btn-info m-3 mr-auto"
                    disabled={!submitIsEnabled}
                    type="submit"
                    value="Add Album to collection"
                    onClick={this.addAlbum.bind(this, value.dispatch)}
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

export default AddAlbum;
