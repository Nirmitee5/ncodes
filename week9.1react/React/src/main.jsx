import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // use createroot from react dom dependenices present in react dom
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( // things will be rendered in the div id = root in the html file 
  
    <App />
  
)
