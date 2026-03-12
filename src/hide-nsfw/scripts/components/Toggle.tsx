import { type Dispatch, type StateUpdater } from 'preact/hooks'
import type { AsyncOrSync } from '#/types/utils'
import { cn } from '#/utils/cn'

interface ToggleProps {
  checked: boolean
  setChecked: Dispatch<StateUpdater<boolean>>
  onClick?: (checked: boolean) => AsyncOrSync<boolean | void>
}

export function Toggle({ checked, setChecked, onClick }: ToggleProps) {
  const clickHandler = async () => {
    const nextChecked = !checked
    setChecked(nextChecked)

    if (onClick) {
      const shouldChange = await onClick(nextChecked)
      if (!shouldChange) setChecked(!nextChecked)
    }
  }

  return (
    <label
      role="checkbox"
      className={cn(
        'bg-toggle-off block h-5 w-9 rounded-full p-1 transition-colors',
        { 'bg-toggle-on': checked },
      )}
      onClick={clickHandler}
    >
      <div
        className={cn(
          'aspect-square h-full rounded-full bg-white transition-transform',
          { 'translate-x-4': checked },
        )}
      ></div>
    </label>
  )
}
