import { useEffect, useState } from 'preact/hooks'
import { Toggle } from './components/Toggle'
import style from './styles/style.css?inline'

export function App() {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    ;(async () => {
      const checkedValue = await BEM.getValue('hide-adult', false)
      setChecked(checkedValue)
    })()
  })

  const clickHandler = async (checked: boolean) => {
    await BEM.setValue('hide-adult', checked)
    return true
  }

  return (
    <>
      <style>{style}</style>
      <div class="flex">
        <span>R18商品のモザイク</span>
        <Toggle checked={checked} setChecked={setChecked} onClick={clickHandler} />
      </div>
    </>
  )
}
