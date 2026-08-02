// Copyright (c) 2026 Axel H. Karlsson

function showOverlay() {
    document.getElementById("overlay")
        .removeAttribute("style")

    document.getElementById("main")
        .setAttribute("style", "display: none;")

    document.getElementById("hamburger")
        .firstElementChild
        .textContent = "close"
}

function hideOverlay() {
    document.getElementById("overlay")
        .setAttribute("style", "display: none;")

    document.getElementById("main")
        .removeAttribute("style")

    document.getElementById("hamburger")
        .firstElementChild
        .textContent = "menu"
}


document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger")
    let showingOverlay = false

    const useOverlay = () => showingOverlay ? hideOverlay() : showOverlay()

    hamburger.addEventListener("click", () => {
        useOverlay()
        showingOverlay = !showingOverlay
    })
})