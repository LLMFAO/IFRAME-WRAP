import React from 'react';

function App() {
  return (
    <div className="fixed inset-0">
      <iframe 
        src="https://primary-production-203b.up.railway.app/webhook/cd05b16a-bfb4-44f0-a361-26f471b8d54f/chat"
        className="w-full h-full border-0"
        title="Web Chat"
        allow="microphone *"
      />
    </div>
  );
}

export default App;
