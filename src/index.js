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
  }

  buyOne() {
    this.setState({ acorns: this.state.acorns + 1 });
  }

  eatOne() {
    if (this.state.acorns > 0) {
      this.setState({ acorns: this.state.acorns - 1 });
    }
  }

  render() {
    return (<main>
      <Button func={this.buyOne.bind(this)} str='Buy One' />
      <Display>{this.state.acorns}</Display>
      <Button func={this.eatOne.bind(this)} str='Eat One' />
    </main>
    );
  }
}

ReactDOM.render(<SimpleGoldenCornApp acorns={0} />,
  document.getElementById('root')
);