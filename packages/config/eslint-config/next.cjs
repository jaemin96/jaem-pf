const { defineConfig, globalIgnores } = require("eslint/config")
const nextVitals = require("eslint-config-next/core-web-vitals")
const nextTs = require("eslint-config-next/typescript")

module.exports = defineConfig([
    ...nextVitals,
    ...nextTs,

    globalIgnores([
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
    ]),
])
