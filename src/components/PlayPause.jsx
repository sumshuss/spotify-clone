import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'
import SongBar from './SongBar';

const PlayPause = ({ song, isPlaying, activeSong, handlePause, handlePlay}) => (isPlaying && activeSong?.title === song.title ? (
  <FaPauseCircle 
  size={35}
  className='text-gray-300'
  onClick={handlePause}/>
) : (
  <FaPlayCircle 
   size={35}
   className='text-gray-300'
   onClick={handlePlay}/>
));

export default PlayPause;
