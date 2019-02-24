import React, { Component } from 'react';

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'deleteAlbum':
      return {
        ...state,
        albums: state.albums.filter(album => album.id !== action.payload),
      };
    case 'updateAlbum':
      return {
        ...state,
        albums: state.albums.map(album =>
          album.id === action.payload.id ? (album = action.payload) : album,
        ),
      };
    case 'addAlbum':
      return {
        ...state,
        albums: [action.payload, ...state.albums],
      };
    default:
      return state;
  }
};

export default class Provider extends Component {
  state = {
    timeOut: 2000,
    albums: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    },
  };

  componentDidMount() {
    const fetchData = () => {
      fetch('http://localhost:4000/albums')
        .then(res => res.json())
        .then(data =>
          this.setState({
            albums: data,
          }),
        );
    };

    setTimeout(fetchData, this.state.timeOut);
  }

  render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
  }
}

export const Consumer = Context.Consumer;

// zrobić to takżę przez dispatch
