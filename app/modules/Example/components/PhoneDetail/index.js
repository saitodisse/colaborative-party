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
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
};


//
// component
//
@Cerebral({
  user: ['example', 'selectedPhoneItem'],
})
class PhoneDetail extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    signals: PropTypes.object,
  };

  getAllUserProps(props) {
    if (props.user) {
      return (
        [
          <ListItem
            key={0}
            style={styles.name}
            primaryText={props.user.name}
          />,
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
            key={3}
            leftIcon={<ActionAccountBox />}
            primaryText={'@' + props.user.username.toLowerCase()}
          />,
          <ListItem
            key={4}
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
