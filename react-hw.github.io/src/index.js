import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Main from 'components/main/main'

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
