// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './App.module.scss';
import NxWelcome from './nx-welcome';

import { Route, Link } from 'react-router-dom';
import { MainNavigation, MainNavigationItem } from '@sixfold/common-ui';
import React, { Suspense } from 'react';

const PlacesRemoteEntry = React.lazy(() => import('places/PlacesRemoteEntry'));
const FleetMonitorRemoteEntry = React.lazy(
  () => import('fleet_monitor/FleetMonitorRemoteEntry')
);

export function App() {
  return (
    <>
      <MainNavigation>
        <MainNavigationItem href="/places" link="Places"></MainNavigationItem>
        <MainNavigationItem
          href="/fleet-monitor"
          link="Fleet monitor"
        ></MainNavigationItem>
      </MainNavigation>
      <Route
        path="/places"
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
