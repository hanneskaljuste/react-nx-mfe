import { CommonUi } from '@sixfold/common-ui';
import { Link, Route } from 'react-router-dom';
interface Props {
  title: string;
}
function PlacesRemoteEntry(props: Props) {
  return (
    <div>
      <h3>Places Remote Entry: {props.title}</h3>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/places/home">Places home</Link>
          </li>
          <li>
            <Link to="/places/info">Places info</Link>
          </li>
        </ul>
      </div>
      <Route path="/places/home" exact render={() => <div>Places home</div>} />
      <Route path="/places/info" exact render={() => <div>Places info</div>} />
    </div>
  );
}
export default PlacesRemoteEntry;
