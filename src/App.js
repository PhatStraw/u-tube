import React from 'react';
import './App.css';

import { Grid } from '@material-ui/core'
import VideoList from './components/VideoList.js'
import SearchBar from './components/SearchBar.js'
import Content from './components/Content.js'
import youtube from './api/Youtube.js'


class App extends React.Component{
  state = {
    videos: [],
    selectedVideo: null,
  }

  handleSubmit = async(searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyBKVJdARAImJB3NJdjg1wGoVMoAaF-6gws",
        q: searchTerm,
    }
    })
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    })
  }
  
  render(){
  return (
    <div className="App">
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>

            <Grid item xs={12}>
                <SearchBar onFormSubmit={this.handleSubmit}/>
            </Grid>

            <Grid item xs={8}>
              <Content video={this.state.selectedVideo}/>
            </Grid>

            <Grid item xs={4}>
              <VideoList />
            </Grid>

          </Grid>
        </Grid>
      </Grid>
      
    </div>
  );
  }
}

export default App;
