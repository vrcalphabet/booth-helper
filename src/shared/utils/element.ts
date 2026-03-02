/** 特定の要素を監視し、条件が満たされた場合にコールバックを実行します。 */
export async function watchElement<T extends Element = Element>(options: {
  target: T | string
  when: (target: Element) => boolean
  do: (target: Element) => void
}): Promise<void> {
  const target =
    typeof options.target === 'string'
      ? await waitForElement<T>(options.target)
      : options.target

  let prevResult = options.when(target)
  if (prevResult) {
    options.do(target)
  }

  const observer = new MutationObserver(() => {
    const currentResult = options.when(target)
    if (currentResult && !prevResult) {
      options.do(target)
    }

    prevResult = currentResult
  })

  observer.observe(target, { childList: true })
}

/** 指定した要素がDOM上に出現するまで待機します。 */
export function waitForElement<T extends Element = Element>(
  query: string,
): Promise<T> {
  return new Promise((resolve) => {
    const findElement = () => document.querySelector<T>(query)

    const element = findElement()
    if (element) return resolve(element)

    const observer = new MutationObserver(() => {
      const element = findElement()
      if (element) {
        observer.disconnect()
        resolve(element)
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })
  })
}
