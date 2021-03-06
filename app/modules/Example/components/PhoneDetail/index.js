import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';

import {
  List,
  ListItem,
} from 'material-ui';

import {
  CommunicationCall,
  CommunicationEmail,
  ActionWork,
  ActionAccountBox,
} from 'material-ui/svg-icons';

//
// styles
//
const styles = {
  left: {
    textAlign: 'left',
  },
  buttonBack: {
    margin: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
};


//
// component
//
@Cerebral({
  user: ['example', 'selectedUser'],
})
class PhoneDetail extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    signals: PropTypes.object,
  };

  backToListClicked() {
    this.props.signals.example.backToListClicked();
  }

  getAllUserProps(props) {
    if (props.user) {
      return (
        [
          <ListItem
            key={1}
            leftIcon={<CommunicationCall />}
            style={styles.bold}
            primaryText={props.user.phone}
          />,
          <ListItem
            key={2}
            leftIcon={<CommunicationEmail />}
            primaryText={props.user.email.toLowerCase()}
          />,
          <ListItem
            key={0}
            leftIcon={<ActionAccountBox />}
            primaryText={'@' + props.user.username.toLowerCase()}
          />,
          <ListItem
            key={3}
            leftIcon={<ActionWork />}
            primaryText={props.user.company && props.user.company.name}
          />,
        ]
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        <List style={styles.left}>
          {this.getAllUserProps(this.props)}
        </List>
      </div>
    );
  }
}

export default PhoneDetail;
