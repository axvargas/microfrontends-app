import ReactDOM from 'react-dom'
import App from './App'
// Mount function to start up the application
// const mount = (Component, selector) => {
//   ReactDOM.render(
//     <Component />,
//     document.querySelector(selector)
//   )
// }
const mount = (el) => {
  ReactDOM.render(
    <App />,
    el
  )
}

// If we are in development mode and isolation call mount inmediately
if (process.env.NODE_ENV === 'development') {
  // mount(App, '#marketing-dev-root')
  const el = document.querySelector('#marketing-dev-root')
  if(el){
    mount(el)
  }
}

// If we are in container we should export the mount function to be called by the container
export { mount }