// When we import without curly braces we are importing the entire Object, 
//When we import with curly braces we are importing only one property
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import _ from 'lodash'
import SearchBar from './components/serach_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyCIP7PQtj2ak3hXjP4i8VSL4YHODv9WNzo'

class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
             videos: [] ,
              selectedVideo:  null };
        this.searchVideo('cartoon')
       
    }

    searchVideo(term){
        YTSearch({ key: API_KEY, term: term }, videos => {
            this.setState({ 
                videos :videos,
                selectedVideo:  videos[0]
            });
            console.log(videos)
        })
    }

    render() {
        const serachVideo = _.debounce( ( term ) => { this.searchVideo(term) } ,300)
        return <div>
            <SearchBar searchVideo={serachVideo}/>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList  onVideoSelect={ selectedVideo => this.setState({selectedVideo :selectedVideo})}
            videos={this.state.videos}/>
            
        </div>;
    }
}

ReactDOM.render(<App />, document.querySelector('.container'))