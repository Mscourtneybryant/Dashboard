import './App.css';
import Nav from './nav';
import Ratings from './Rating';
import AvgRatings from './AvgRatings';
import SentimentAnalysis from './SentimentAnalysis';
import WebsiteVisitors from './WebsiteVistors';

function App() {
  return (
    <div className='App'>
      <Nav />
      <div className='containerOfRows'>
        <div className='topRow'>
          <Ratings rating='1,281' />
          <AvgRatings AvgRating='4.6' />
          <SentimentAnalysis
            sentiment1='960'
            sentiment2='112'
            sentiment3='321'
          />
        </div>
        <div className='bottomRow'>
          {' '}
          <WebsiteVisitors visitors='821' />
        </div>
      </div>
    </div>
  );
}

export default App;