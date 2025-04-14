// eslint-disable-next-line
import { useState, useEffect, useRef } from 'react';
import About from './terminal/About';
import Skills from './terminal/Skills';
import Projects from './terminal/Projects';
import Contact from './terminal/Contact';
import Help from './terminal/Help';

const Terminal = () => {
  const [input, setInput] = useState('');
  // Social links component
  const SocialLinks = () => (
    <div className="social-links">
      <a href="https://github.com/Shannu116" target="_blank" rel="noopener noreferrer" className="social-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#00ff00">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
      <a href="https://linkedin.com/in/shanmukha-perla-58216a2b6" target="_blank" rel="noopener noreferrer" className="social-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#00ff00">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </a>
      <a href="mailto:shanmukhaperla284@gmail.com" className="social-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#00ff00">
          <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
        </svg>
      </a>
      <a href="https://x.com/shanmukha2916" target="_blank" rel="noopener noreferrer" className="social-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#00ff00">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
      </a>
    </div>
  );

  const [history, setHistory] = useState([
    {
      type: 'output',
      content: (
        <div className="welcome-container">
          <div className="welcome-banner">
            <pre className="ascii-art">{`
      ███████╗██╗  ██╗ █████╗ ███╗   ██╗███╗   ███╗██╗   ██╗██╗  ██╗██╗  ██╗ █████╗
      ██╔════╝██║  ██║██╔══██╗████╗  ██║████╗ ████║██║   ██║██║ ██╔╝██║  ██║██╔══██╗
      ███████╗███████║███████║██╔██╗ ██║██╔████╔██║██║   ██║█████╔╝ ███████║███████║
      ╚════██║██╔══██║██╔══██║██║╚██╗██║██║╚██╔╝██║██║   ██║██╔═██╗ ██╔══██║██╔══██║
      ███████║██║  ██║██║  ██║██║ ╚████║██║ ╚═╝ ██║╚██████╔╝██║  ██╗██║  ██║██║  ██║
      ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝
            `}</pre>
          </div>
          <div className="welcome-content">
            <p>Welcome to my terminal portfolio! Type 'help' to see available commands.</p>
            <SocialLinks />
          </div>
        </div>
      )
    }
  ]);
  const [currentDirectory, setCurrentDirectory] = useState('~');
  const [showPrompt, setShowPrompt] = useState(true);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  // Available directories and their content
  const fileSystem = {
    '~': {
      type: 'directory',
      content: ['about', 'skills', 'projects', 'contact']
    },
    '~/about': {
      type: 'file',
      content: <About />
    },
    '~/skills': {
      type: 'file',
      content: <Skills />
    },
    '~/projects': {
      type: 'file',
      content: <Projects />
    },
    '~/contact': {
      type: 'file',
      content: <Contact />
    }
  };

  // Scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input when terminal is clicked
  useEffect(() => {
    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    if (terminalRef.current) {
      terminalRef.current.addEventListener('click', handleClick);
    }

    return () => {
      if (terminalRef.current) {
        terminalRef.current.removeEventListener('click', handleClick);
      }
    };
  }, []);

  // Auto-focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    // Add command to history
    setHistory(prev => [...prev, { type: 'command', content: `${currentDirectory} $ ${input}` }]);

    // Process command
    processCommand(input.trim().toLowerCase());

    // Clear input
    setInput('');
  };

  const processCommand = (cmd) => {
    // Split command and arguments
    const args = cmd.split(' ');
    const command = args[0];

    switch (command) {
      case 'help':
        showHelp();
        break;
      case 'clear':
        clearTerminal();
        break;
      case 'ls':
        listDirectory();
        break;
      case 'cd':
        changeDirectory(args[1]);
        break;
      case 'cat':
        catFile(args[1]);
        break;
      case 'echo':
        echoText(args.slice(1).join(' '));
        break;
      case 'whoami':
        showWhoami();
        break;
      case 'date':
        showDate();
        break;
      case 'pwd':
        showPwd();
        break;
      default:
        setHistory(prev => [...prev, {
          type: 'error',
          content: `Command not found: ${command}. Type 'help' to see available commands.`
        }]);
    }
  };

  const showHelp = () => {
    setHistory(prev => [...prev, { type: 'component', content: <Help /> }]);
  };

  const clearTerminal = () => {
    // Keep only the welcome banner when clearing the terminal
    setHistory([history[0]]);
  };

  const listDirectory = () => {
    const currentDir = fileSystem[currentDirectory];
    if (currentDir && currentDir.type === 'directory') {
      const content = currentDir.content.map(item => {
        const path = currentDirectory === '~' ? `~/${item}` : `${currentDirectory}/${item}`;
        const itemType = fileSystem[path]?.type;
        return itemType === 'directory' ? `${item}/` : item;
      }).join('    ');

      setHistory(prev => [...prev, { type: 'output', content }]);
    } else {
      setHistory(prev => [...prev, { type: 'error', content: 'Cannot list items: Not a directory' }]);
    }
  };

  const changeDirectory = (dir) => {
    if (!dir || dir === '~') {
      setCurrentDirectory('~');
      return;
    }

    // Handle relative paths
    let newPath;
    if (dir.startsWith('/')) {
      newPath = dir;
    } else if (dir === '..') {
      // Go up one directory
      if (currentDirectory === '~') {
        setHistory(prev => [...prev, { type: 'error', content: 'Already at root directory' }]);
        return;
      }
      const parts = currentDirectory.split('/');
      parts.pop();
      newPath = parts.join('/') || '~';
    } else {
      // Navigate to subdirectory
      newPath = currentDirectory === '~' ? `~/${dir}` : `${currentDirectory}/${dir}`;
    }

    // Check if directory exists
    if (fileSystem[newPath] && fileSystem[newPath].type === 'directory') {
      setCurrentDirectory(newPath);
    } else {
      setHistory(prev => [...prev, { type: 'error', content: `cd: ${dir}: No such directory` }]);
    }
  };

  const catFile = (filename) => {
    if (!filename) {
      setHistory(prev => [...prev, { type: 'error', content: 'cat: missing file operand' }]);
      return;
    }

    // Determine the full path
    const path = filename.startsWith('~') ? filename :
                 currentDirectory === '~' ? `~/${filename}` : `${currentDirectory}/${filename}`;

    // Check if file exists
    if (fileSystem[path] && fileSystem[path].type === 'file') {
      setHistory(prev => [...prev, { type: 'component', content: fileSystem[path].content }]);
    } else {
      setHistory(prev => [...prev, { type: 'error', content: `cat: ${filename}: No such file` }]);
    }
  };

  const echoText = (text) => {
    if (!text) {
      setHistory(prev => [...prev, { type: 'output', content: '' }]);
      return;
    }
    setHistory(prev => [...prev, { type: 'output', content: text }]);
  };

  const showWhoami = () => {
    setHistory(prev => [...prev, { type: 'output', content: 'visitor@shanmukha-portfolio' }]);
  };

  const showDate = () => {
    setHistory(prev => [...prev, { type: 'output', content: new Date().toString() }]);
  };

  const showPwd = () => {
    setHistory(prev => [...prev, { type: 'output', content: currentDirectory }]);
  };

  return (
    <div className="terminal-window">
      {/* Terminal Window Header */}
      <div className="terminal-header">
        <div className="terminal-title">shanmukha@portfolio: ~/terminal</div>
        <div className="terminal-buttons">
          <div className="terminal-button terminal-button-minimize"></div>
          <div className="terminal-button terminal-button-maximize"></div>
          <div className="terminal-button terminal-button-close"></div>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="terminal-container" ref={terminalRef}>
        {/* Terminal history */}
        <div className="terminal-history">
          {history.map((entry, index) => (
            <div key={index} className={`terminal-entry terminal-${entry.type}`}>
              {entry.type === 'command' ? (
                <div style={{ whiteSpace: 'pre-wrap' }}>{entry.content}</div>
              ) : entry.type === 'component' ? (
                <div className="terminal-component">{entry.content}</div>
              ) : entry.type === 'error' ? (
                <div style={{ color: '#ff0000', whiteSpace: 'pre-wrap' }}>{entry.content}</div>
              ) : (
                <div style={{ whiteSpace: 'pre-wrap' }}>{entry.content}</div>
              )}
            </div>
          ))}
        </div>

        {/* Terminal input */}
        {showPrompt && (
          <form onSubmit={handleSubmit} style={{ display: 'flex', marginTop: '0.5rem' }}>
            <span style={{ marginRight: '0.5rem' }}>{currentDirectory} $</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#00ff00',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                outline: 'none',
                width: '100%'
              }}
              autoFocus
              autoComplete="off"
              spellCheck="false"
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default Terminal;
