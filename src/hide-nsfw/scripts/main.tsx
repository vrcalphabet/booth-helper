import { render } from "preact"
import { App } from "./App"

const root = document.querySelector("header")!
console.log(root)

const div = document.createElement("div")
root.prepend(div)
render((<App />), div)
