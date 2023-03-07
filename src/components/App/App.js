import React, { Component } from "react";
import "./App.css";
import { fetchData, postData } from "../../apiCalls";
import UrlContainer from "../UrlContainer/UrlContainer";
import UrlForm from "../UrlForm/UrlForm";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
    };
  }

  componentDidMount() {
    fetchData()
      .then((data) => this.setState({ urls: data.urls }))
      .catch((err) => console.log(err, "Sorry, we can't find that data"));
  }

  addUrl = (newUrl) => {
    postData(newUrl);
    this.setState({ urls: [...this.state.urls, newUrl] });
  };

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrl={this.addUrl} />
        </header>
        <UrlContainer urls={this.state.urls} />
      </main>
    );
  }
}

export default App;
