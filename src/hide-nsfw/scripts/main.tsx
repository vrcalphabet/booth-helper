import { watchElement } from '#/utils/element'
import { App } from './App'
import { render } from 'preact'

watchElement({
  target: '#js-user-pulldown > div > div',
  when: (target) => target.children.length > 1,
  do: () => {
    const target = document.querySelector('#js-user-pulldown a')!
    const div = document.createElement('div')
    target.before(div)
    render(<App />, div)
  },
})
