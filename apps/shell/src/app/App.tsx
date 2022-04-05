// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './App.module.scss';
import NxWelcome from './nx-welcome';

import { Route, Link } from 'react-router-dom';
import { MainNavigation, MainNavigationItem } from '@sixfold/common-ui';
import React, { Suspense } from 'react';
import { Company, Weather } from '@sixfold/types';

const PlacesRemoteEntry = React.lazy(() => import('places/PlacesRemoteEntry'));
const FleetMonitorRemoteEntry = React.lazy(
  () => import('fleet_monitor/FleetMonitorRemoteEntry')
);

const WeatherRemoteEntry = React.lazy(
  () => import('weather/WeatherRemoteEntry')
);

export function App() {
  const c: Company = {
    name: 'Test',
    description: 'Desc',
  };
  const w: Weather = {
    temperature: 3,
    location: 'Tallinn',
    lat: 123,
    lon: 321,
  };
  console.log(c, w);
  return (
    <>
      <MainNavigation>
        <MainNavigationItem href="/places" link="Places"></MainNavigationItem>
        <MainNavigationItem
          href="/fleet-monitor"
          link="Fleet monitor"
        ></MainNavigationItem>
      </MainNavigation>

      <div className="row">
        <div className="col s9">
          <Route
            path="/places"
            render={() => (
              <div>
                <Suspense fallback={<div>Loading...</div>}>
                  <PlacesRemoteEntry title="Places title from shell"></PlacesRemoteEntry>
                </Suspense>
              </div>
            )}
          />
          <Route
            path="/fleet-monitor"
            exact
            render={() => (
              <div>
                <Suspense fallback={<div>Loading...</div>}>
                  <FleetMonitorRemoteEntry></FleetMonitorRemoteEntry>
                </Suspense>
              </div>
            )}
          />
        </div>
        <div className="col s3">
          <Suspense fallback={<div>Loading...</div>}>
            <WeatherRemoteEntry></WeatherRemoteEntry>
          </Suspense>
        </div>
      </div>

      {/* END: routes */}
    </>
  );
}

export default App;
