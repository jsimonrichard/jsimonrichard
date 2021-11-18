import React, { useMemo } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export function StyledLink(props) {
  return (
    <Link {...props} className={"block text-black no-underline hover:underline hover:text-gray-500 "+props.className}>
      {props.children}
    </Link>
  );
}

export function DynamicAge(props) {
  const age = useMemo(() => new Date(Date.now() - props.startDate).getUTCFullYear() - 1970, [props.startDate]);
  return <span>{age}</span>;
}

export function Timeline(props) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5">
      {props.children.map((child,id) => (
        <>
          <div className="text-right pr-4 pb-4 border-r-2 border-black" key={id}>
            {child.props.date}
          </div>

          <div className="col-span-2 sm:col-span-3 md:col-span-4 pl-4 pb-8">
            {child.props.children}
          </div>
        </>
      ))}
    </div>
  )
}

export function TimelineItem(props) {
  return props.children;
}

export function Skill(props) {
  return (
    <div className="flex-initial p-4 w-36 text-center transition-bounce"
      style={{opacity: props.isVisible ? "1" : "0"}}>
      <img src={props.img}
        className="mx-auto w-24 mb-2" />
      <div className="mx-auto bg-green-600 transition-bounce"
        style={{width: "5rem", height: props.isVisible ? `${props.level*4}rem` : "0px"}}/>

      <span className="font-bold text-xl">{props.name}</span>
    </div>
  )
}

export function SkillScale(props) {
  return (
    <div className="flex-initial h-96 pr-2 text-right border-black border-r-2 transition-bounce"
      style={{opacity: props.isVisible ? "1" : "0"}}>

      <div className="mb-10">
        Expert
      </div>

      <div className="mb-10">
        Advanced
      </div>

      <div className="mb-10">
        Intermediate
      </div>

      <div className="mb-10">
        Some&nbsp;Knowledge
      </div>

      <div>
        Novice
      </div>
    </div>
  )
}

export function ScrollArrow(props) {
  return (
    <div {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
      </svg>
    </div>
  );
}