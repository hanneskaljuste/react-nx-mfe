import { CommonUi } from '@sixfold/common-ui';
import { Company } from '@sixfold/types';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import PlacesList from './places-list/PlacesList';
interface Props {
  title: string;
}
function PlacesRemoteEntry(props: Props) {
  const c: Company = {
    name: 'Test',
    description: 'Desc',
  };
  console.log(c);
  return (
    <BrowserRouter>
      <div>
        <h3>{props.title}</h3>
        {/* <PlacesList></PlacesList> */}
        <div className="row">
          <div className="col s2">
            <Link className="waves-effect waves-light btn" to="/places/home">
              Places home
            </Link>
          </div>
          <div className="col s2">
            <Link className="waves-effect waves-light btn" to="/places/info">
              Places info
            </Link>
          </div>
        </div>
        <Route
          path="/places/home"
          exact
          render={() => (
            <div>
              <div className="row">
                <div className="col s12 m12">
                  <div className="card">
                    <div className="card-image">
                      <img src="https://materializecss.com/images/sample-1.jpg" />
                      <span className="card-title">Card Title</span>
                      <a className="btn-floating halfway-fab waves-effect waves-light red">
                        <i className="material-icons">add</i>
                      </a>
                    </div>
                    <div className="card-content">
                      <p>
                        I am a very simple card. I am good at containing small
                        bits of information. I am convenient because I require
                        little markup to use effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        />
        <Route
          path="/places/info"
          exact
          render={() => (
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Alvin</td>
                    <td>Eclair</td>
                    <td>$0.87</td>
                  </tr>
                  <tr>
                    <td>Alan</td>
                    <td>Jellybean</td>
                    <td>$3.76</td>
                  </tr>
                  <tr>
                    <td>Jonathan</td>
                    <td>Lollipop</td>
                    <td>$7.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        />
      </div>
    </BrowserRouter>
  );
}
export default PlacesRemoteEntry;
