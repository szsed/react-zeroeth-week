import React from 'react';
import { Button } from './components/Button';
import { Display } from './components/Display';
import { buyOneAction, eatOneAction } from './actions/acorns-actions';
import store from './store';
import { connect } from 'react-redux';

class SimpleGoldenCornApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  buyOne() {
    store.dispatch(buyOneAction);
  }

  eatOne() {
    store.dispatch(eatOneAction);
  }

  handleKeyDown(event) {
    if (event.keyCode === 38) {
      this.buyOne();
    } else if (event.keyCode === 40) {
      this.eatOne();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (<>
      <Button func={this.buyOne} str='Buy One' />
      <Display>{this.props.acorns}</Display>
      <Button func={this.eatOne} str='Eat One' />
    </>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(SimpleGoldenCornApp);