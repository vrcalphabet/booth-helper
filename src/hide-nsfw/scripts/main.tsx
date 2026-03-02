import { watchElement } from '#/utils/watchElement'
import { App } from './App'
import { render } from 'preact'

const pulldown = document.querySelector('#js-user-pulldown > div > div')!

watchElement(pulldown, {
  when: () => pulldown.children.length > 1,
  do: () => {
    const target = document.querySelector("#js-user-pulldown a")!
    const div = document.createElement('div')
    target.before(div)
    render(<App />, div)
  },
})
