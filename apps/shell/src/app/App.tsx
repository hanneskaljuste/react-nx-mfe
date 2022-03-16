// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './App.module.scss';
import NxWelcome from './nx-welcome';

import { Route, Link } from 'react-router-dom';
import { CommonUi } from '@sixfold/common-ui';
import React, { Suspense } from 'react';

const PlacesRemoteEntry = React.lazy(() => import('places/PlacesRemoteEntry'));
const FleetMonitorRemoteEntry = React.lazy(
  () => import('fleet_monitor/FleetMonitorRemoteEntry')
);

export function App() {
  return (
    <>
      Shell App1
      <CommonUi />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/places">Places</Link>
          </li>
          <li>
            <Link to="/fleet-monitor">Fleet monitor</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/places"
        exact
        render={() => (
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <PlacesRemoteEntry title="test"></PlacesRemoteEntry>
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
      {/* END: routes */}
    </>
  );
}

export default App;
