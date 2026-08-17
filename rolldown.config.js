/*
 * Copyright (c) 2026 Axel H. Karlsson.
 *
 * Usage of source code is permitted under the BSD-3-Clause licence, which is available in the
 * LICENSE file in the project's root directory.
 * Any content and media, except the favicon, is licenced under CC BY-NC ND.
 */

import { defineConfig } from "rolldown"

export default defineConfig({
    input: "_intermediate/assets/js/index.js",
    output: {
        file: "_intermediate/assets/js/index.js",
        minify: {
            mangle: true,
            compress: true,
            codegen: {
                legalComments: "inline",
                removeWhitespace: true
            }
        }
    }
})