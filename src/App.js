import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div style={{
        height: '50%',
        width: '100%',
        backgroundColor: 'hsl(195deg, 20%, 86%)',
        position: 'fixed',
        bottom: 0,
        left: 0
      }}></div>
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
