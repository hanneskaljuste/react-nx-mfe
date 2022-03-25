import { CommonUi } from '@sixfold/common-ui';
import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

function WeatherRemoteEntry() {
  const [newTemp, setNewTemp] = useState('5');
  const shuffle = useCallback(() => {
    let temp = Math.floor(Math.random() * 10);
    temp *= Math.round(Math.random()) ? 1 : -1;
    setNewTemp(temp + '');
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 5000);
    return () => clearInterval(intervalID);
  }, [shuffle]);
  // const temp = setInterval(shuffle, 5000);
  return (
    <BrowserRouter>
      <h3>Weather</h3>
      <div className="row">
        <div className="col s12 m12">
          <div className="card">
            <div className="card-image">
              <img src="https://icons-for-free.com/iconfiles/png/512/cloudy+day+sun+sunny+weather+icon-1320196636792315138.png" />
              {/* <span className="card-title">Card Title</span> */}
            </div>
            <div className="card-content">
              <h1 style={{ textAlign: 'center' }}>{newTemp}&deg;C</h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            {/* <div className="card-action">
              <a href="#">This is a link</a>
            </div> */}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default WeatherRemoteEntry;
