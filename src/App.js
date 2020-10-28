import React from "react";
import "./App.css";

const initState = [
  {
    id: 1,
    title: "Jocker",
    info:
      "Joker is a 2019 American psychological thriller film directed and produced by Todd Phillips, who co-wrote the screenplay with Scott Silver.",
    isFavourite: false,
  },
  {
    id: 2,
    title: "Titanic",
    info:
      "Titanic is a 1997 American epic romance and disaster film directed, written, co-produced, and co-edited by James Cameron.",
    isFavourite: true,
  },
  {
    id: 3,
    title: "Butterfly effect",
    info:
      "In chaos theory, the butterfly effect is the sensitive dependence on initial conditions in which a small change in one state of a deterministic nonlinear system can result in large differences in a later state.",
    isFavourite: false,
  },
  {
    id: 4,
    title: "Fight Club",
    info:
      "Fight Club is a 1999 American film directed by David Fincher and starring Brad Pitt, Edward Norton, and Helena Bonham Carter.",
    isFavourite: false,
  },
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: null, movies: initState };
  }
  handleSubmit = (event) => {
    this.setState({ search: event.target.searchFiled.value });
    event.preventDefault();
  };
  setFav = (id) => {
    debugger;
    let obj = this.state.movies.filter((m) => m.id === id);
    obj[0].isFavourite = !obj[0].isFavourite;
    this.setState({
      movies: [...this.state.movies],
    });
  };

  render() {
    return (
      <div className="App">
        <SearchField
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        {this.state.movies
          .sort((m1, m2) => m2.isFavourite - m1.isFavourite)
          .filter((m) => {
            if (this.state.search == null) return m;
            else {
              return m.title
                .toLowerCase()
                .includes(this.state.search.toLowerCase());
            }
          })
          .map((movie) => {
            return <Movie setFav={this.setFav} movie={movie} />;
          })}
      </div>
    );
  }
}

export default App;

const SearchField = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchFiled"
          placeholder="Search for a movie..."
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

const Movie = ({ movie, setFav }) => {
  const chooseFilm = () => {
    setFav(movie.id);
  };
  return (
    <div className="container">
      <div className="square"></div>
      <div className="movieInfo">
        <div className="title">{movie.title}</div>
        <div className="info">{movie.info}</div>
      </div>
      <div
        onClick={chooseFilm}
        className={movie.isFavourite ? "heartFav" : "heart"}
      ></div>
    </div>
  );
};
