import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SimpleTodo from './simpletodo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SimpleTodo />, document.getElementById('root'));
registerServiceWorker();
