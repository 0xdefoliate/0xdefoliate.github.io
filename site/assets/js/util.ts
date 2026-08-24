/*
 * Copyright (c) 2026 Axel H. Karlsson.
 *
 * Usage of source code is permitted under the BSD-3-Clause licence, which is available in the
 * LICENSE file in the project's root directory.
 * Any content and media, except the favicon, is licenced under CC BY-NC ND.
 */

/// <reference types="./types.d.ts" />

export class ElementStore {
    private readonly elements: IElementStore = {
        overlay: document.getElementById("overlay")!,
        main: document.getElementById("main")!,
        hamburger: document.getElementById("hamburger")!
    }

    public get(id: keyof IElementStore): IElementStore[keyof IElementStore] {
        return this.elements[id]
    }
}