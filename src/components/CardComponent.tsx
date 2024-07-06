import React, { useState } from 'react';
import CopyIcon from '../../public/icons/CopyIcon.jsx';
import CheckIcon from '../../public/icons/CheckIcon.jsx';
import { toast, Toaster } from "sonner";

interface CardProps {
  classes?: string;
  text?: string;
  name?: string;
}

const Card: React.FC<CardProps> = ({ classes = "", text = "Click me", name = "" }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      const codeToCopy = `<button type="button" class="${classes}">${text}</button>`;
      await navigator.clipboard.writeText(codeToCopy);
      toast.success("Copied to clipboard!");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    } catch (err) {
      toast.error("Failed to copy!");
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <article className="rounded-2xl bg-indigo-100/80 dark:bg-gray-900/60 z-[1] mx-auto px-4 py-4 sm:h-72 aspect-square border border-indigo-400 dark:border-gray-300/40 shadow">
      <section className="relative">
        <p className='absolute top-0 left-3 text-gray-600 dark:text-indigo-300'>{name}</p>
        <button className="absolute top-0 right-0" name='copyClipboard' aria-label='Copy button to clipboard' onClick={copyToClipboard}>
        {isCopied ? <CheckIcon className="text-gray-800 dark:text-indigo-300" /> : <CopyIcon className="text-gray-800 dark:text-indigo-300" />} 
        </button>
      </section>
      <section className="items-center align-center h-full">
        <div className="flex items-center justify-center h-full">
          <button type="button" name='generic button' aria-label='demo button for showing styles' className={classes}  onClick={copyToClipboard} >{text} </button>
        </div>
      </section>
      <Toaster/>   
    </article>
  );
};

export default Card;
