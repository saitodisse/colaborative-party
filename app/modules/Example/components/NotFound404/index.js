import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import LayoutBootstrap from '../LayoutBootstrap';

@Cerebral()
class NotFound404 extends React.Component {
  static propTypes = {
    signals: PropTypes.object,
  };

  render() {
    return (
      <div>
        <LayoutBootstrap
          child1={404}
          child2="Page not found"
          child3={(
            <div>
              <h4>Page not found</h4>
              <p>Can't find your page</p>
            </div>
          )}
        />
      </div>
    );
  }
}

export default NotFound404;
