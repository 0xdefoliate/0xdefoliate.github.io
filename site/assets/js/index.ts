/*
 * Copyright (c) 2026 Axel H. Karlsson.
 *
 * Usage of source code is permitted under the BSD-3-Clause licence, which is available in the
 * LICENSE file in the project's root directory.
 * Any content and media, except the favicon, is licenced under CC BY-NC ND.
 */

import { ElementStore } from "./util"

class HamburgerOverlay {
    private readonly elements: ElementStore

    public shown: boolean = false

    constructor(elements: ElementStore) {
        this.elements = elements
    }

    public show() {
        this.shown = true

        this.elements.get("overlay").removeAttribute("style")

        this.elements.get("hamburger")
            .firstElementChild!
            .textContent = "close"
    }

    public hide() {
        this.shown = false

        this.elements.get("overlay").setAttribute("style", "display: none;")

        this.elements.get("hamburger")
            .firstElementChild!
            .textContent = "menu"
    }

    public toggle() {
        if (this.shown) {
            return this.hide()
        }

        this.show()
    }
}

class Application {
    private readonly elements = new ElementStore()
    private readonly overlay: HamburgerOverlay

    constructor() {
        this.overlay = new HamburgerOverlay(this.elements)
    }

    public init() {
        this.elements.get("hamburger").addEventListener("click", () => {
            this.overlay.toggle()
        })
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const app = new Application()
    app.init()
})