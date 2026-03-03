import type { AsyncOrSync } from '#/types/utils'
import { cn } from '#/utils/cn'
import { useState } from 'preact/hooks'

interface ToggleProps {
  defaultChecked?: boolean
  onClick?: (checked: boolean) => AsyncOrSync<boolean | void>
}

export function Toggle({ defaultChecked = false, onClick }: ToggleProps) {
  const [checked, setChecked] = useState(defaultChecked)

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
