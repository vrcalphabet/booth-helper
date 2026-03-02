export function watchElement(
  target: Element,
  options: {
    when: () => boolean
    do: () => void
  },
): void {
  let prevResult = options.when()
  if (prevResult) {
    options.do()
  }

  const observer = new MutationObserver(() => {
    const currentResult = options.when()
    if (currentResult && !prevResult) {
      options.do()
    }

    prevResult = currentResult
  })
  observer.observe(target, { childList: true })
}
