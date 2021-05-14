import { Component } from 'react';

function Cursor(props) {
    return (
        <span className="cursor" id={props.id}>&#9608;</span>
    );
}

class Typer extends Component {
  static defaultProps = {
    startDelay: 500,
    delay: 50,
    endDelay: 500
  }

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      isUnmounted: false,
      hideCursor: false
    }

    this.handleFinish = () => {
      this.setState({hideCursor: true});
      this.props.onFinish();
    }
  }

  componentDidMount() {
    if(this.props.start === "onmount") {
      setTimeout(this.handleType, this.props.startDelay);
    } else if(this.props.start === "onload") {
      window.onload = () => setTimeout(this.handleType, this.props.startDelay);
    }
  }

  handleType = () => {
    const { children, delay, endDelay } = this.props;
    const { text } = this.state;

    this.setState({
      text: children.substring(0, text.length + 1),
      isFinished: text === children
    }, () => {
      if(this.state.isFinished) {
        setTimeout(this.handleFinish, endDelay);
      } else {
        setTimeout(this.handleType, delay);
      }
    });
  };

  render() {
    return (<span>{ this.state.text }{ !this.state.hideCursor && <Cursor /> }</span>);
  }
}

export { Typer, Cursor };