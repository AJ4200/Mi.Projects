import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/customebg.css';
import './styles/footer.css';
import './styles/logo.css';
import './styles/projectmodal.css';
import './styles/tab.css';
import './styles/tabButton.css';
import './styles/loader.css'
import './styles/footer.css';
import './styles/tinybutton.css';
import './styles/project.css';
import './styles/MP3Player.css'
import './styles/volumeslider.css'
import './styles/seeker.css'
import './styles/tooltip.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
