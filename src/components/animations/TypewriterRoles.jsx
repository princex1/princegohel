import React, { useState, useEffect } from 'react';

const ROLES = [
  'B.Tech CSE Student',
  'Web Developer',
  'C Programming',
];

export default function TypewriterRoles({ className = '' }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTarget = ROLES[roleIndex];
    let timer;

    if (!isDeleting && displayText.length < currentTarget.length) {
      // Typing forward
      timer = setTimeout(() => {
        setDisplayText(currentTarget.slice(0, displayText.length + 1));
      }, 75);
    } else if (!isDeleting && displayText.length === currentTarget.length) {
      // Pause at full word
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timer = setTimeout(() => {
        setDisplayText(currentTarget.slice(0, displayText.length - 1));
      }, 40);
    } else if (isDeleting && displayText.length === 0) {
      // Move to next word
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <span className={`inline-flex items-center font-mono ${className}`}>
      <span className="text-accent-600 dark:text-accent-400 font-semibold">
        {displayText}
      </span>
      <span className="ml-1 inline-block w-[2px] h-[1.1em] bg-accent-500 animate-pulse align-middle" />
    </span>
  );
}
