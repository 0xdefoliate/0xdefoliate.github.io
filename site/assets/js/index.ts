/*
 * Copyright (c) 2026 Axel H. Karlsson.
 *
 * Usage of source code is permitted under the BSD-3-Clause licence, which is available in the
 * LICENSE file in the project's root directory.
 * Any content and media, except the favicon, is licenced under CC BY-NC ND.
 */

interface IElementStore {
    overlay: HTMLElement
    main: HTMLElement
    hamburger: HTMLElement
}

class ElementStore {
    private readonly elements: IElementStore = {
        overlay: document.getElementById("overlay")!,
        main: document.getElementById("main")!,
        hamburger: document.getElementById("hamburger")!
    }

    public get(id: keyof IElementStore): IElementStore[keyof IElementStore] {
        return this.elements[id]
    }
}


function showOverlay(elements: ElementStore) {
    elements.get("overlay").removeAttribute("style")
    elements.get("main").setAttribute("style", "display: none;")

    elements.get("hamburger")
        .firstElementChild!
        .textContent = "close"
}

function hideOverlay(elements: ElementStore) {
    elements.get("overlay").setAttribute("style", "display: none;")
    elements.get("main").removeAttribute("style")

    elements.get("hamburger")
        .firstElementChild!
        .textContent = "menu"
}

document.addEventListener("DOMContentLoaded", () => {

    const elements = new ElementStore()
    let showingOverlay = false

    const toggleOverlay = () =>
        showingOverlay
            ? hideOverlay(elements)
            : showOverlay(elements)

    elements.get("hamburger").addEventListener("click", () => {
        toggleOverlay()
        showingOverlay = !showingOverlay
    })
})