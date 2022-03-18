import { CommonUi } from '@sixfold/common-ui';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import PlacesList from './places-list/PlacesList';
interface Props {
  title: string;
}
function PlacesRemoteEntry(props: Props) {
  return (
    <BrowserRouter>
      <div>
        <h3>Places Remote Entry: {props.title}</h3>
        <PlacesList></PlacesList>
        <div className="row">
          <div className="col s3">
            <Link to="/places/home">Places home</Link>
          </div>
          <div className="col s3">
            <Link to="/places/info">Places info</Link>
          </div>
        </div>
        <Route
          path="/places/home"
          exact
          render={() => <div>Places home</div>}
        />
        <Route
          path="/places/info"
          exact
          render={() => <div>Places info</div>}
        />
      </div>
    </BrowserRouter>
  );
}
export default PlacesRemoteEntry;
