import React from "react";

import { Grid } from "@material-ui/core";

import { SearchBar, VideoDetail, VideoList } from "./components";

import youtube from "./api/youtube";

import "./main.css";
import "./reset.css";

const API_KEY = process.env.REACT_APP_YT_API_KEY;

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.handleSubmit("baby shark");
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: API_KEY,
        q: searchTerm,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <div>
        <nav>
          <div id="nav-start">
            <button id="nav-burger"></button>
            <a href="https://www.youtube.com/">
              <img
                id="nav-brand"
                src="https://img.icons8.com/fluent/48/000000/youtube-play.png"
                alt="Youtube logo"
              />
            </a>
          </div>
          <SearchBar onFormSubmit={this.handleSubmit} />
        </nav>

        <main>
          <section id="video-content">
            <VideoDetail video={selectedVideo} />
          </section>

          <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
        </main>
      </div>
    );
  }
}

export default App;
