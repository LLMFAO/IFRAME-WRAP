import React, { useEffect, useState } from 'react';

function App() {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const storedUrl = localStorage.getItem('webchatUrl');
    if (!storedUrl) {
      promptForUrl();
    } else {
      setUrl(storedUrl);
    }
  }, []);

  const promptForUrl = () => {
    const userUrl = prompt('Please enter the WebChat URL:');
    if (userUrl) {
      localStorage.setItem('webchatUrl', userUrl);
      setUrl(userUrl);
    }
  };

  const resetUrl = () => {
    localStorage.removeItem('webchatUrl');
    setUrl(null);
    promptForUrl();
  };

  if (!url) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fixed inset-0">
      <iframe 
        src={url}
        className="w-full h-full border-0"
        title="Web Chat"
        allow="microphone *"
      />
      <button 
        onClick={resetUrl} 
        className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded"
      >
        Reset URL
      </button>
    </div>
  );
}

export default App;
