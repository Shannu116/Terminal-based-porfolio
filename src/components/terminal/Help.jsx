const Help = () => {
  return (
    <div className="help-content">
      <h3 style={{ color: '#00ff00', marginBottom: '1rem' }}>Available Commands:</h3>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <tbody>
          <tr>
            <td style={{ padding: '0.5rem', color: '#00ff00', fontWeight: 'bold' }}>help</td>
            <td style={{ padding: '0.5rem' }}>Display this help message</td>
          </tr>
          <tr>
            <td style={{ padding: '0.5rem', color: '#00ff00', fontWeight: 'bold' }}>clear</td>
            <td style={{ padding: '0.5rem' }}>Clear the terminal screen</td>
          </tr>
          <tr>
            <td style={{ padding: '0.5rem', color: '#00ff00', fontWeight: 'bold' }}>ls</td>
            <td style={{ padding: '0.5rem' }}>List directory contents</td>
          </tr>
          
          <tr>
            <td style={{ padding: '0.5rem', color: '#00ff00', fontWeight: 'bold' }}>cat [file]</td>
            <td style={{ padding: '0.5rem' }}>Display file contents (e.g., cat about)</td>
          </tr>
          <tr>
            <td style={{ padding: '0.5rem', color: '#00ff00', fontWeight: 'bold' }}>echo [text]</td>
            <td style={{ padding: '0.5rem' }}>Display a line of text</td>
          </tr>
          <tr>
            <td style={{ padding: '0.5rem', color: '#00ff00', fontWeight: 'bold' }}>whoami</td>
            <td style={{ padding: '0.5rem' }}>Display current user</td>
          </tr>
          <tr>
            <td style={{ padding: '0.5rem', color: '#00ff00', fontWeight: 'bold' }}>date</td>
            <td style={{ padding: '0.5rem' }}>Display current date and time</td>
          </tr>
          <tr>
            <td style={{ padding: '0.5rem', color: '#00ff00', fontWeight: 'bold' }}>pwd</td>
            <td style={{ padding: '0.5rem' }}>Print working directory</td>
          </tr>
        </tbody>
      </table>
      <div style={{ marginTop: '1rem' }}>
        <p>Try these commands to navigate through my portfolio:</p>
        <p>1. <span style={{ color: '#00ff00' }}>ls</span> - to see available sections</p>
        <p>2. <span style={{ color: '#00ff00' }}>cat about</span> - to read about me</p>
        <p>3. <span style={{ color: '#00ff00' }}>cat skills</span> - to see my skills</p>
        <p>4. <span style={{ color: '#00ff00' }}>cat projects</span> - to view my projects</p>
        <p>5. <span style={{ color: '#00ff00' }}>cat contact</span> - to get my contact information</p>
      </div>
    </div>
  );
};

export default Help;
