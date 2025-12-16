import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://www.example.com',
//     target: '_blank',
//     children: 'Go to Example.com'
//   }
// }

const anotherReactElement = (
  <a href='https://www.example.com' target='_blank'>
    Go to Example.com
  </a>
)

const user = "John Doe";
const reactElement = React.createElement(
  'a',
  { href: 'https://www.example.com', target: '_blank' },
  'Go to Example.com1111',
  user
);

createRoot(document.getElementById('root')).render(
    <App />

    // anotherReactElement
    // reactElement
)
