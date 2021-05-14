import { Component } from 'react';
import { Typer, Cursor } from './typer';

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
    constructor(props) {
        super(props);

        this.state = {
            children: this.props.children,
            command: this.props.command,
        }
    }
    render() {
        return (
            <TerminalBase className={this.props.className}>
                <div>
                    <span className="font-bold">
                        <span className="text-terminal-green">jsimonrichard</span>
                        :<span className="text-terminal-blue">~</span>$
                    </span>
                    
                    <span> {this.state.command}</span>
                </div>

                <div>
                    {this.state.children}
                </div>
            </TerminalBase>
        );
    }
}

class TerminalAnimated extends Terminal {
    constructor(props) {
        super(props);

        this.showContent = () => {
            console.log("Done");
            this.setState({children: (
                <div>
                    {this.props.children}
                    <Cursor />    
                </div>
            )});
        }

        this.state = {
            children: (<></>),
            command: (
                <Typer start="onmount" onFinish={() => this.showContent()}>{this.props.command}</Typer>
            )
        }
    }
}

function TerminalLink(props) {
    return (
        <a className="" href={props.href}>
            [<span className="text-green-500 hover:text-green-300 hover:underline cursor-pointer uppercase">{ props.children }</span>]
        </a>
    );
}

export { Terminal, TerminalAnimated, TerminalLink };