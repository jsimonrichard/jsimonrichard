import { Component } from 'react';

function Cursor(props) {
    return (
        <span className="cursor" id={this.props.id}>&#9608;</span>
    );
}

class Typer extends Component {
  static defaultProps = {
    delay: 50,
    endDelay: 500
  }

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      isUnmounted: false
    }
  }

  componentDidMount() {
    if(this.props.start === "onmount") {
      setTimeout(this.handleType, this.props.delay);
    }
  }

  componentWillUnmount() {
  }

  handleType = () => {
    const { children, delay, endDelay } = this.props;
    const { text } = this.state;

    this.setState({
      text: children.substring(0, text.length + 1),
      isFinished: text === children
    });

    if(text === children) {
      setTimeout(this.props.onFinish, endDelay);
    } else {
      setTimeout(this.handleType, delay);
    }
  };

  render() {
    return (<span>{ this.state.text }<Cursor /></span>);
  }
}

class Terminal extends Component {

}
export default Terminal;