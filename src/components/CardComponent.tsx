import React, { useState } from 'react';
import CopyIcon from '../../public/icons/CopyIcon.jsx';

interface CardProps {
  classes?: string;
  text?: string;
}
const Card: React.FC<CardProps> = ({ classes }) => {
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText('hello')
      .then(() => {
        // toast.success("Copied to clipboard!");
        console.log('hello')
      })
      .catch((err) => {
        // toast.error("Failed to copy!");
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <article
    className="rounded-2xl bg-indigo-100/80 dark:bg-gray-900/60 z-[1] mx-auto px-4 py-4 sm:h-72 aspect-square border border-indigo-400 dark:border-gray-300/40 shadow"
  >
    <section className="relative">
      <button className="absolute top-0 right-0" onClick={copyToClipboard}>
        <CopyIcon />
      </button>
    </section>
    <section className="items-center align-center h-full">
      <div className="flex items-center justify-center h-full">
        <button type="button" className={classes}> Click me </button>
      </div>
    </section>

  </article>
  );
};

export default Card;
