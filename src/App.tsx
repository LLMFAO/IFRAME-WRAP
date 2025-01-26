import React from 'react';
import { WEBCHAT_CONFIG } from './config';

function App() {
  return (
    <div className="fixed inset-0">
      <iframe 
        src={WEBCHAT_CONFIG.URL}
        className="w-full h-full border-0"
        title="Web Chat"
        allow="microphone *"
      />
    </div>
  );
}

export default App;
