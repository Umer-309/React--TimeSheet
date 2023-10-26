import {useState, useEffect} from 'react'
import Box from './Box'


function App() {
  const [time, setTime] = useState(0);
  const [showTime, setShowTime] = useState('00:00:00');
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (running) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1000); // Increment time by 1 second
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [running]);

  const startStop = () => {
    setRunning(prevRunning => !prevRunning);
  };

  const reset = () => {
    setRunning(false);
    setTime(0);
  };

  useEffect(() => {
    const currentTime = time;
    const hours = Math.floor(currentTime / 3600);
    const minutes = Math.floor((currentTime % 3600) / 60);
    const seconds = currentTime % 60;
    setShowTime(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
  }, [time]);

  function pad(number) {
    return number.toString().padStart(2, '0');
  }

  console.log(time);
  return (
    <div className='container'>
      <Box
        time={time}
        showTime={showTime}
        startStop={startStop}
        reset={reset}
      />
    </div>
  )
}

export default App