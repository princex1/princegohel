import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function CodeWindow({
  filename = 'prince_profile.c',
  code,
  language = 'c',
  className = '',
}) {
  const [copied, setCopied] = useState(false);

  // Simple, punchy C profile strictly showing skills and interests
  const defaultCode = `/* prince_profile.c - Skills & Interests */
#include <stdio.h>

char skills[]    = { "HTML5", "CSS3", "C", "Tailwind"};
char interests[] = { "DSA", "Web Dev", "Systems" };

int main(void) {
    printf("Exploring algorithms and building clean software.\\n");
    return 0;
}`;

  const codeToRender = code || defaultCode;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeToRender);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Syntax highlighting parser
  const renderHighlightedLine = (line) => {
    const trimmed = line.trim();

    // Comments
    if (trimmed.startsWith('/*') || trimmed.startsWith('*') || trimmed.startsWith('//')) {
      return <span className="text-slate-400 dark:text-gray-400 italic">{line}</span>;
    }

    // Directives
    if (trimmed.startsWith('#include')) {
      return (
        <>
          <span className="text-accent-500 dark:text-accent-400 font-semibold">#include </span>
          <span className="text-emerald-500 dark:text-emerald-400">{line.replace('#include ', '')}</span>
        </>
      );
    }

    // Function definition
    if (line.includes('int main(void)')) {
      return (
        <>
          <span className="text-accent-500 dark:text-accent-400 font-semibold">int </span>
          <span className="text-amber-500 dark:text-amber-400 font-semibold">main</span>
          <span className="text-slate-300 dark:text-gray-300">(</span>
          <span className="text-accent-500 dark:text-accent-400">void</span>
          <span className="text-slate-300 dark:text-gray-300">) &#123;</span>
        </>
      );
    }

    // Return statement
    if (trimmed.startsWith('return 0;')) {
      const indent = line.substring(0, line.indexOf('return'));
      return (
        <>
          <span>{indent}</span>
          <span className="text-accent-500 dark:text-accent-400 font-semibold">return </span>
          <span className="text-purple-400 font-semibold">0</span>
          <span className="text-slate-300 dark:text-gray-300">;</span>
        </>
      );
    }

    // printf statements
    if (line.includes('printf(')) {
      const indent = line.substring(0, line.indexOf('printf'));
      const parts = line.split('"');
      const insideQuote = parts[1] || '';
      return (
        <>
          <span>{indent}</span>
          <span className="text-amber-500 dark:text-amber-400">printf</span>
          <span className="text-slate-300 dark:text-gray-300">(</span>
          <span className="text-emerald-500 dark:text-emerald-400">"{insideQuote}"</span>
          <span className="text-slate-300 dark:text-gray-300">);</span>
        </>
      );
    }

    // Variables & Arrays
    if (line.includes('const char*')) {
      const parts = line.split('=');
      const left = parts[0];
      const right = parts[1] || '';
      return (
        <>
          <span className="text-accent-500 dark:text-accent-400 font-semibold">const char*</span>
          <span className="text-slate-200 dark:text-gray-200">{left.replace('const char*', '')}</span>
          <span className="text-accent-400">=</span>
          <span className="text-emerald-500 dark:text-emerald-400">{right}</span>
        </>
      );
    }

    // Braces
    if (trimmed === '}' || trimmed === '{') {
      return <span className="text-slate-300 dark:text-gray-300">{line}</span>;
    }

    return <span className="text-slate-300 dark:text-gray-200">{line}</span>;
  };

  return (
    <div
      className={cn(
        'rounded-xl overflow-hidden border border-slate-200/90 dark:border-white/10 bg-[#0F172A] dark:bg-[#151518] shadow-lg text-left font-mono text-xs sm:text-sm select-none',
        className
      )}
    >
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 dark:bg-[#1a1a1f] border-b border-slate-800 dark:border-white/5">
        <div className="flex items-center gap-2">
          {/* macOS window control dots */}
          <div className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80 transition-opacity cursor-pointer" title="Close" />
          <div className="w-3 h-3 rounded-full bg-amber-500 hover:opacity-80 transition-opacity cursor-pointer" title="Minimize" />
          <div className="w-3 h-3 rounded-full bg-emerald-500 hover:opacity-80 transition-opacity cursor-pointer" title="Expand" />
          <span className="ml-3 text-xs text-slate-400 dark:text-gray-400 font-sans font-medium flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-accent-400" />
            {filename}
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-slate-400 hover:text-white hover:bg-slate-800 dark:hover:bg-white/10 transition-colors"
          title="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 text-[11px] font-sans">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="text-[11px] font-sans">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Editor Body - Completely NON-SCROLLABLE */}
      <div className="p-4 sm:p-5 overflow-hidden text-gray-300 leading-relaxed">
        <pre className="font-mono text-xs sm:text-sm leading-relaxed whitespace-pre overflow-hidden">
          <code>
            {codeToRender.split('\n').map((line, idx) => (
              <div key={idx} className="table-row">
                <span className="table-cell pr-3 sm:pr-4 text-slate-600 dark:text-gray-600 select-none text-right w-6">
                  {idx + 1}
                </span>
                <span className="table-cell">
                  {renderHighlightedLine(line)}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
