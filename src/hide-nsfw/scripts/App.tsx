import { Toggle } from './components/Toggle'
import { Tailwind } from 'react-shadow-scope'

export function App() {
  return (
    <Tailwind href="./style/style.css">
      <span>Hello, PReact!</span>
      <Toggle />
    </Tailwind>
  )
}
