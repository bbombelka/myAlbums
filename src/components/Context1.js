import React, { Component } from "react";

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "deleteContact":
      return {
        ...state,
        albums: state.albums.filter(album => album.id !== action.payload)
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
    }

    // dispatch: action => {
    //  fetch('http://localhost:4000/albums', {
    // method: "DELETE", headers: {'Content-type': 'application/json'}, body: JSON.stringify({id: action.payload})
    //
    //
    //  }

    //   deleteAlbum: id => {
    //     console.log(id);
    //     // fetch("http://localhost:4000/albums", {
    //     //   method: "DELETE",
    //     //   body: JSON.stringify({ id: id }),
    //     //   headers: { "Content-type": "application/json" }
    //     // })
    //     //   .then(res => res.json())
    //     //   .then(res => alert(res));
    //   }
  };

  componentDidMount() {
    const fetchData = () => {
      fetch("http://localhost:4000/albums")
        .then(res => res.json())
        .then(data =>
          this.setState({
            albums: data
          })
        );
    };

    setTimeout(fetchData, this.state.timeOut);
  }

  // {
  //   fetch("http://localhost:4000/albums", {
  //     method: "DELETE",
  //     body: JSON.stringify({ id: id }),
  //     headers: { "Content-type": "application/json" }
  //   })
  //     .then(res => res.json())
  //     .then(res => alert(res));
  // };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

// zrobić to takżę przez dispatch
