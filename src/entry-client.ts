import './app.css'
import App from './App.svelte'

new App({
  target: document.getElementById('app') as any,
  hydrate: true
})
