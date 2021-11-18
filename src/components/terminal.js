import React, { useState } from 'react';
import { Typer, Cursor } from './typer';
import { HashLink as Link } from 'react-router-hash-link'; 

export function TerminalBase(props) {
  return (
    <div className={props.className+" bg-terminal-dark-blue rounded-lg text-white"}>
      <div className="p-3 flex flex-row-reverse">
        <div className="rounded-full bg-red-500 w-3.5 h-3.5 ml-2" />
        <div className="rounded-full bg-yellow-500 w-3.5 h-3.5 ml-2" />
        <div className="rounded-full bg-green-500 w-3.5 h-3.5 ml-2" />
      </div>
      <div className="p-6 pt-0">
        {props.children}
      </div>
    </div>
  );
}

export function Terminal(props) {
  return (
    <TerminalBase className={props.className}>
      <div>
        <span className="font-bold">
          <span className="text-terminal-green">jsimonrichard@jsimonrichard.com</span>
          :<span className="text-terminal-blue">~</span>$
        </span>
        
        <span> {props.command}</span>
      </div>

      {props.children}
 
    </TerminalBase>
  );
}

export function TerminalAnimated(props) {
  const [isRunning, setIsRunning] = useState(true);

  return <Terminal command={(
    <Typer start={props.start} onFinish={()=>setIsRunning(false)} startDelay={props.startDelay}>
      {props.command}
    </Typer>
  )} className={props.className}>

    <div style={{visibility: isRunning ? "hidden" : "visible"}}>
      {props.children}<Cursor />
    </div>

  </Terminal>;
}

export function TerminalLink(props) {
    return (
        <Link to={props.to}>
            [<span className="text-green-500 hover:text-green-300 hover:underline cursor-pointer uppercase">
              { props.children }
            </span>]
        </Link>
    );
}