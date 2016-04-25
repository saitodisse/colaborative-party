import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import buttonStyles from '../../styles/button-style.css';
import styles from './styles.css';
import _ from 'lodash';
import { arrayToRgba } from '../../../utils';

@Cerebral({
  selectedColor: ['example', 'selectedColor'],
})
class ButtonColorChanger extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    selectedColor: PropTypes.array,
    toColor: PropTypes.array,
    $ref: PropTypes.number,
    signals: PropTypes.object,
  };
  getChildren() {
    if (this.props.children) {
      return this.props.children;
    }
    return this.props.toColor.join(', ');
  }
  isSelected() {
    return _.isEqual(this.props.selectedColor, this.props.toColor);
  }
  buttonCss() {
    const css = [
      buttonStyles.btn,
      buttonStyles['btn-default'],
      buttonStyles['btn-margin'],
      styles['btn-color'],
    ];
    if (this.isSelected()) {
      css.push(buttonStyles['btn-selected']);
    }
    return css.join(' ');
  }
  divStyle() {
    if (this.isSelected()) {
      return {backgroundColor: arrayToRgba(this.props.toColor, 0.5)};
    }
    return null;
  }
  render() {
    return (
      <div
        className={styles['color-change-box']}
        style={this.divStyle()}
      >
        <button
          style={{backgroundColor: arrayToRgba(this.props.toColor, 1)}}
          className={this.buttonCss()}
          key={this.props.$ref}
          onClick={() => this.props.signals.example.colorChanged({
            $ref: this.props.$ref,
            color: this.props.toColor.join('-'),
          })}
        />
        <div className={styles['color-change-box-label']}>{this.getChildren()}</div>
      </div>
    );
  }
}

export default ButtonColorChanger;