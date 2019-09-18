import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, Green Fox Academy!</h1>,
  document.getElementById('root'),
);

const Button = props => {
  return (
    <button onClick={props.func}>
      {props.str}
    </button>
  );
}

const Display = props => {
  return (
    <p>
      {props.children}
    </p>
  )
}

class SimpleGoldenCornApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { acorns: props.acorns }
    this.buyOne = this.buyOne.bind(this);
    this.eatOne = this.eatOne.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  buyOne() {
    this.setState({ acorns: this.state.acorns + 1 });
  }

  eatOne() {
    if (this.state.acorns > 0) {
      this.setState({ acorns: this.state.acorns - 1 });
    }
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
      <Display>{this.state.acorns}</Display>
      <Button func={this.eatOne} str='Eat One' />
    </>
    );
  }
}

ReactDOM.render(<SimpleGoldenCornApp acorns={0} />,
  document.getElementById('root')
);
