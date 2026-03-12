export async function waitForDOMContentLoaded() {
  return new Promise((resolve) => {
    document.addEventListener('DOMContentLoaded', resolve, { once: true })
  })
}
