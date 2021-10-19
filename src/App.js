import React from 'react'
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Slider from './components/Slider';

function App() {
  return (
    <>
    <div className='backdrop2'>
      <Navbar/>
      <Banner/>
      <Slider id='first'
      mediasType="movie"
      title="NETFLIX ORIGINALS"
      searchpath="/discover/movie"
      />
      <Slider 
      mediasType="tv"
      title="Top Tv shows"
      searchpath="/discover/tv"
      />
      <Slider 
      // mediasType="tv"
      title="Trending this Week"
      searchpath="/trending/all/week"
      />
      <Slider
        mediaType="movies"
        title="Action Movies"
        searchpath="/discover/movie"
        params={{ with_genre: 28 }}
      />
    </div>
    </>
  )
}

export default App
