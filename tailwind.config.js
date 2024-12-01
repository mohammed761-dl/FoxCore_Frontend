/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./Pages/**/*.{razor,html}",       // Include all .razor files in the Pages directory
        "./Components/**/*.{razor,html}",  // Include all .razor files in the Components directory
        "./wwwroot/index.html",            // Include index.html file in wwwroot
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
