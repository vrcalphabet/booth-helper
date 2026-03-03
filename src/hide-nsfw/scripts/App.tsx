import { Toggle } from './components/Toggle'
import style from './styles/style.css?inline'

export function App() {
  return (
    <>
      <style>{style}</style>
      <span class="text-red-500 font-bold animate-ping">Hello, PReact!</span>
      <Toggle />
    </>
  )
}
