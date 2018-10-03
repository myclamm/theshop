import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// Some boilerplate cache configs. 
// Serve assets from local cache in prod but not in dev.
registerServiceWorker();
