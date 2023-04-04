import React from 'react';
import WavyLink from './WavyLink';
const PrimaryButton: React.FC<{ to: string; children: React.ReactNode }> = (props) => {
  return (
    <WavyLink to={props.to}>
      <a className="group relative inline-block focus:outline-none w-[140px] md:w-[200px] focus:ring mt-5">
        <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 w-[140px] md:w-[200px] bg-primary-400 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

        <span className="relative inline-block border-2 w-[140px] md:w-[200px] border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
          {props.children}
        </span>
      </a>
    </WavyLink>
  );
};

export default PrimaryButton;
