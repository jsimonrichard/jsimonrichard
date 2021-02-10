import { Component } from 'react';

class TerminalBase extends Component {
    render() {
        return (
            <div className={this.props.className+" bg-terminal-gray rounded-lg text-white"}>
                <div className="p-3 flex flex-row-reverse">
                    <div className="rounded-full bg-red-500 w-3.5 h-3.5 ml-2" />
                    <div className="rounded-full bg-yellow-500 w-3.5 h-3.5 ml-2" />
                    <div className="rounded-full bg-green-500 w-3.5 h-3.5 ml-2" />
                </div>
                <div className="p-6 pt-0">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

class Terminal extends Component {
    render() {
        return (
            <TerminalBase className={this.props.className}>
                <div>
                    <span className="font-bold">
                        <span className="text-terminal-green">jsimonrichard</span>
                        :<span className="text-terminal-blue">~</span>$
                    </span>
                    
                    <span> {this.props.command}</span>
                </div>

                <div>
                    {this.props.children}
                </div>
            </TerminalBase>
        );
    }
}

export default Terminal;