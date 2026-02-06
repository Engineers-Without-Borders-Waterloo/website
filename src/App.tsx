import './App.css'
import Greeting from './components/Greeting/Greeting.tsx'

function App() {

  return (
    <div style={{maxWidth: 960, margin: '0 auto', padding: 16}}>
      <h1>Playground</h1>
      <Greeting/>
      <Greeting name="Aidan"/>
      <h1>Hello World!</h1>
    </div>
  )
}

export default App