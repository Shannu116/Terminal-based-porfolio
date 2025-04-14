import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: 'Welcome to Shanmukha\'s Terminal Portfolio' },
    { type: 'system', content: 'Type "help" to see available commands' },
    { type: 'prompt', content: '' }
  ]);
  const [currentDirectory, setCurrentDirectory] = useState('~');
  const [activeSection, setActiveSection] = useState(null);
  const [showPrompt, setShowPrompt] = useState(true);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // Available directories/sections
  const directories = {
    '~': { name: 'Home', component: null },
    '~/about': { name: 'About', component: <About /> },
    '~/skills': { name: 'Skills', component: <Skills /> },
    '~/projects': { name: 'Projects', component: <Projects /> },
    '~/contact': { name: 'Contact', component: <Contact /> }
  };

  // Available files
  const files = {
    '~/resume.pdf': { name: 'Resume', type: 'pdf', url: '/resume.pdf' },
    '~/about/bio.txt': { name: 'Bio', type: 'text', content: 'I am Shanmukha, a cybersecurity specialist focused on protecting digital assets and identifying vulnerabilities.' },
    '~/contact/email.txt': { name: 'Email', type: 'text', content: 'shanmukhaperla284@gmail.com' }
  };

  // Focus input on mount and click
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleClick = () => {
      inputRef.current?.focus();
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  // Scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Handle command execution
  const executeCommand = (cmd) => {
    const args = cmd.trim().split(' ');
    const command = args[0].toLowerCase();
    
    // Add command to history
    setHistory(prev => [
      ...prev.slice(0, -1), 
      { type: 'command', content: `${currentDirectory} $ ${cmd}` },
      { type: 'prompt', content: '' }
    ]);

    // Process command
    switch (command) {
      case 'help':
        showHelp();
        break;
      case 'clear':
        clearTerminal();
        break;
      case 'ls':
        listDirectory(args[1]);
        break;
      case 'cd':
        changeDirectory(args[1]);
        break;
      case 'cat':
        catFile(args[1]);
        break;
      case 'open':
        openFile(args[1]);
        break;
      case 'echo':
        echoText(args.slice(1).join(' '));
        break;
      case 'whoami':
        whoami();
        break;
      case 'date':
        showDate();
        break;
      case 'exit':
        exitTerminal();
        break;
      case 'pwd':
        printWorkingDirectory();
        break;
      case 'show':
        showSection(args[1]);
        break;
      case 'hide':
        hideSection();
        break;
      case '':
        // Do nothing for empty command
        break;
      default:
        commandNotFound(command);
    }
  };

  // Command handlers
  const showHelp = () => {
    setHistory(prev => [
      ...prev.slice(0, -1),
      { type: 'output', content: 'Available commands:' },
      { type: 'output', content: 'help - Show this help message' },
      { type: 'output', content: 'clear - Clear the terminal' },
      { type: 'output', content: 'ls [directory] - List contents of directory' },
      { type: 'output', content: 'cd [directory] - Change directory' },
      { type: 'output', content: 'cat [file] - Display file contents' },
      { type: 'output', content: 'open [file] - Open file (like resume)' },
      { type: 'output', content: 'echo [text] - Display text' },
      { type: 'output', content: 'whoami - Display user information' },
      { type: 'output', content: 'date - Display current date and time' },
      { type: 'output', content: 'pwd - Print working directory' },
      { type: 'output', content: 'show [section] - Display a section (about, skills, projects, contact)' },
      { type: 'output', content: 'hide - Hide the currently shown section' },
      { type: 'output', content: 'exit - Exit terminal (reload page)' },
      { type: 'prompt', content: '' }
    ]);
  };

  const clearTerminal = () => {
    setHistory([
      { type: 'prompt', content: '' }
    ]);
  };

  const listDirectory = (dir) => {
    const path = dir ? (dir.startsWith('/') ? dir : `${currentDirectory}/${dir}`.replace(/\/\//g, '/')) : currentDirectory;
    const normalizedPath = path.replace(/\/\.$/, '').replace(/\/+/g, '/');
    
    // Get directories at this path
    const dirsAtPath = Object.keys(directories)
      .filter(d => {
        const parts = d.split('/');
        const parentPath = parts.slice(0, -1).join('/');
        return parentPath === normalizedPath || (normalizedPath === '~' && d !== '~' && d.startsWith('~/')); 
      })
      .map(d => d.split('/').pop());
    
    // Get files at this path
    const filesAtPath = Object.keys(files)
      .filter(f => {
        const parts = f.split('/');
        const parentPath = parts.slice(0, -1).join('/');
        return parentPath === normalizedPath;
      })
      .map(f => f.split('/').pop());
    
    if (dirsAtPath.length === 0 && filesAtPath.length === 0) {
      setHistory(prev => [
        ...prev.slice(0, -1),
        { type: 'output', content: 'No files or directories found.' },
        { type: 'prompt', content: '' }
      ]);
      return;
    }
    
    const output = [
      ...dirsAtPath.map(d => ({ type: 'output', content: `<span style="color: var(--accent);">${d}/</span>` })),
      ...filesAtPath.map(f => ({ type: 'output', content: f }))
    ];
    
    setHistory(prev => [
      ...prev.slice(0, -1),
      ...output,
      { type: 'prompt', content: '' }
    ]);
  };

  const changeDirectory = (dir) => {
    if (!dir) {
      setCurrentDirectory('~');
      setHistory(prev => [
        ...prev.slice(0, -1),
        { type: 'prompt', content: '' }
      ]);
      return;
    }

    let newPath;
    if (dir === '..') {
      const parts = currentDirectory.split('/');
      if (parts.length > 1) {
        parts.pop();
        newPath = parts.join('/');
      } else {
        newPath = '~';
      }
    } else if (dir === '~' || dir === '/') {
      newPath = '~';
    } else if (dir.startsWith('/')) {
      newPath = dir;
    } else {
      newPath = `${currentDirectory}/${dir}`.replace(/\/\//g, '/');
    }

    // Check if directory exists
    const dirExists = Object.keys(directories).some(d => 
      d === newPath || 
      (newPath !== '~' && d.startsWith(`${newPath}/`))
    );

    if (dirExists) {
      setCurrentDirectory(newPath);
      setHistory(prev => [
        ...prev.slice(0, -1),
        { type: 'prompt', content: '' }
      ]);
      
      // If there's a component for this directory, show it
      if (directories[newPath] && directories[newPath].component) {
        setActiveSection(directories[newPath].component);
      }
    } else {
      setHistory(prev => [
        ...prev.slice(0, -1),
        { type: 'error', content: `cd: ${dir}: No such directory` },
        { type: 'prompt', content: '' }
      ]);
    }
  };

  const catFile = (file) => {
    if (!file) {
      setHistory(prev => [
        ...prev.slice(0, -1),
        { type: 'error', content: 'cat: missing file operand' },
        { type: 'prompt', content: '' }
      ]);
      return;
    }

    const filePath = file.startsWith('/') || file.startsWith('~') 
      ? file 
      : `${currentDirectory}/${file}`.replace(/\/\//g, '/');

    if (files[filePath]) {
      if (files[filePath].type === 'text') {
        setHistory(prev => [
          ...prev.slice(0, -1),
          { type: 'output', content: files[filePath].content },
          { type: 'prompt', content: '' }
        ]);
      } else {
        setHistory(prev => [
          ...prev.slice(0, -1),
          { type: 'error', content: `cat: ${file}: Not a text file` },
          { type: 'prompt', content: '' }
        ]);
      }
    } else {
      setHistory(prev => [
        ...prev.slice(0, -1),
        { type: 'error', content: `cat: ${file}: No such file` },
        { type: 'prompt', content: '' }
      ]);
    }
  };

  const openFile = (file) => {
    if (!file) {
      setHistory(prev => [
        ...prev.slice(0, -1),
        { type: 'error', content: 'open: missing file operand' },
        { type: 'prompt', content: '' }
      ]);
      return;
    }

    const filePath = file.startsWith('/') || file.startsWith('~') 
      ? file 
      : `${currentDirectory}/${file}`.replace(/\/\//g, '/');

    if (files[filePath]) {
      if (files[filePath].url) {
        window.open(files[filePath].url, '_blank');
        setHistory(prev => [
          ...prev.slice(0, -1),
          { type: 'output', content: `Opening ${file}...` },
          { type: 'prompt', content: '' }
        ]);
      } else {
        setHistory(prev => [
          ...prev.slice(0, -1),
          { type: 'error', content: `open: ${file}: Cannot open this file type` },
          { type: 'prompt', content: '' }
        ]);
      }
    } else {
      setHistory(prev => [
        ...prev.slice(0, -1),
        { type: 'error', content: `open: ${file}: No such file` },
        { type: 'prompt', content: '' }
      ]);
    }
  };

  const echoText = (text) => {
    setHistory(prev => [
      ...prev.slice(0, -1),
      { type: 'output', content: text || '' },
      { type: 'prompt', content: '' }
    ]);
  };

  const whoami = () => {
    setHistory(prev => [
      ...prev.slice(0, -1),
      { type: 'output', content: 'Shanmukha Perla - Ethical Hacker & Security Specialist' },
      { type: 'prompt', content: '' }
    ]);
  };

  const showDate = () => {
    const now = new Date();
    setHistory(prev => [
      ...prev.slice(0, -1),
      { type: 'output', content: now.toString() },
      { type: 'prompt', content: '' }
    ]);
  };

  const exitTerminal = () => {
    window.location.reload();
  };

  const printWorkingDirectory = () => {
    setHistory(prev => [
      ...prev.slice(0, -1),
      { type: 'output', content: currentDirectory },
      { type: 'prompt', content: '' }
    ]);
  };

  const showSection = (section) => {
    if (!section) {
      setHistory(prev => [
        ...prev.slice(0, -1),
        { type: 'error', content: 'show: missing section name' },
        { type: 'prompt', content: '' }
      ]);
      return;
    }

    const sectionPath = `~/${section.toLowerCase()}`;
    
    if (directories[sectionPath] && directories[sectionPath].component) {
      setActiveSection(directories[sectionPath].component);
      setHistory(prev => [
        ...prev.slice(0, -1),
        { type: 'output', content: `Showing ${directories[sectionPath].name} section...` },
        { type: 'prompt', content: '' }
      ]);
    } else {
      setHistory(prev => [
        ...prev.slice(0, -1),
        { type: 'error', content: `show: ${section}: No such section` },
        { type: 'prompt', content: '' }
      ]);
    }
  };

  const hideSection = () => {
    if (activeSection) {
      setActiveSection(null);
      setHistory(prev => [
        ...prev.slice(0, -1),
        { type: 'output', content: 'Section hidden' },
        { type: 'prompt', content: '' }
      ]);
    } else {
      setHistory(prev => [
        ...prev.slice(0, -1),
        { type: 'output', content: 'No section currently shown' },
        { type: 'prompt', content: '' }
      ]);
    }
  };

  const commandNotFound = (command) => {
    setHistory(prev => [
      ...prev.slice(0, -1),
      { type: 'error', content: `command not found: ${command}` },
      { type: 'prompt', content: '' }
    ]);
  };

  // Handle input submission
  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(input);
    setInput('');
  };

  return (
    <div className="terminal-container">
      {/* Terminal window */}
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-title">shanmukha@portfolio:~</div>
          <div className="terminal-buttons">
            <span className="terminal-button minimize"></span>
            <span className="terminal-button maximize"></span>
            <span className="terminal-button close"></span>
          </div>
        </div>
        
        <div className="terminal-body" ref={terminalRef}>
          {history.map((item, index) => (
            <div key={index} className={`terminal-line ${item.type}`}>
              {item.type === 'prompt' ? (
                <div className="terminal-prompt">
                  <span className="terminal-user">shanmukha@portfolio</span>
                  <span className="terminal-separator">:</span>
                  <span className="terminal-directory">{currentDirectory}</span>
                  <span className="terminal-prompt-sign">$</span>
                  {index === history.length - 1 ? (
                    <form onSubmit={handleSubmit} style={{ display: 'inline' }}>
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="terminal-input"
                        ref={inputRef}
                        autoFocus
                        spellCheck="false"
                        autoComplete="off"
                      />
                      <span className="terminal-cursor"></span>
                    </form>
                  ) : null}
                </div>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Section display area */}
      <AnimatePresence>
        {activeSection && (
          <motion.div 
            className="section-display"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="section-header">
              <div className="section-title">
                {Object.entries(directories).find(([path, dir]) => 
                  dir.component === activeSection
                )?.[1].name || 'Section'}
              </div>
              <button 
                className="section-close"
                onClick={hideSection}
              >
                ×
              </button>
            </div>
            <div className="section-content">
              {activeSection}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Terminal scanlines effect */}
      <div className="terminal-scanlines"></div>
    </div>
  );
};

export default Terminal;
