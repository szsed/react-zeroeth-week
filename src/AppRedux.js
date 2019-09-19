import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from './components/Button';
import { Display } from './components/Display';
import { buyOneAction, eatOneAction } from './actions/acorns-actions';

class AcornAppRedux extends React.Component {
  constructor(props) {
    super(props);
    this.onBuyOne = this.onBuyOne.bind(this);
    this.onEatOne = this.onEatOne.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  onBuyOne() {
    this.props.onBuyOne();
  }

  onEatOne() {
    this.props.onEatOne();
  }

  handleKeyDown(event) {
    if (event.keyCode === 38) {
      this.buyOne();
    } else if (event.keyCode === 40) {
      this.eatOne();
    }
  }

  render() {
    return (
      <>
        <Button func={this.onBuyOne} str="Buy One" />
        <Display>{this.props.acorns}</Display>
        <Button func={this.onEatOne} str="Eat One" />
      </>
    );
  }
}

const mapStateToProps = (state) => state;

const mapActionsToProps = {
  onBuyOne: buyOneAction,
  onEatOne: eatOneAction,
};

export default withRouter(connect(mapStateToProps, mapActionsToProps)(AcornAppRedux));
