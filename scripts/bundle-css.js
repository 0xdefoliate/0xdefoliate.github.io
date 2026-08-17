/*
 * Copyright (c) 2026 Axel H. Karlsson.
 *
 * Usage of source code is permitted under the BSD-3-Clause licence, which is available in the
 * LICENSE file in the project's root directory.
 * Any content and media, except the favicon, is licenced under CC BY-NC ND.
 */

import { transform } from "lightningcss"
import { readdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"

async function main() {
    const directory = path.resolve(import.meta.dirname, "..", "_intermediate", "assets", "css")
    const targets = (await readdir(directory)).filter(filename => filename.endsWith(".css"))

    let concatenatedSource = ""

    for (const target of targets) {
        const targetPath = path.resolve(directory, target)
        concatenatedSource += await readFile(targetPath, { encoding: "utf-8" })
    }

    const buffer = Buffer.from(concatenatedSource)

    const code = transform({
        code: buffer,
        minify: true,
        sourceMap: false
    })

    await writeFile(
        path.resolve(directory, "bundle.css"),
        code.code.toString()
    )
}

if (import.meta.main) {
    await main()
}