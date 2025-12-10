import { join } from "path";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./**/*.{js,ts,jsx,tsx}",
        "../../packages/**/*.{js,ts,jsx,tsx}",
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        join(__dirname, "../../packages/ui/src/**/*.{js,ts,jsx,tsx}"),
    ],
    theme: { extend: {} },
    plugins: [],
};