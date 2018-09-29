import React, { Component } from "react";
import "./App.css";
import brownz from "./brownz.jpeg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // catUrl: "https://purr.objects-us-west-1.dream.io/i/18882019_1932557806979479_8521838552350708560_n.jpg"
      catUrl: brownz
    };
    this.getMoreCats = this.getMoreCats.bind(this);
  }

  componentDidMount() {
    this.getMoreCats();
  }

  getMoreCats() {
    this.setState({
      catUrl: brownz
    });
    const that = this;
    fetch("https://aws.random.cat/meow")
      .then(res => {
        return res.json();
      })
      .then(data => {
        that.setState({
          catUrl: data.file
        });
      });
  }

  render() {
    const styles = {
      backgroundImage: "url(" + this.state.catUrl + ")"
      // backgroundSize: "cover"
    };
    return (
      <div className="App">
        <div style={styles} />
        <button className="show-more" onClick={this.getMoreCats}>
          MORE MEOWW !!!
        </button>
      </div>
    );
  }
}

export default App;
