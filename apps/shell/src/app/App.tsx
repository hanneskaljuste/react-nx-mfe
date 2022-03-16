// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './App.module.scss';
import NxWelcome from './nx-welcome';

import { Route, Link } from 'react-router-dom';
import { CommonUi } from '@sixfold/common-ui';
import React, { Suspense } from 'react';

const PlacesRemoteEntry = React.lazy(() => import('places/PlacesRemoteEntry'));

export function App() {
  return (
    <>
      Shell App1
      <Suspense fallback={<div>Loading...</div>}>
        <PlacesRemoteEntry></PlacesRemoteEntry>
      </Suspense>
      <CommonUi />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </>
  );
}

export default App;
