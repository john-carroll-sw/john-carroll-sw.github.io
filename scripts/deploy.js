// Simple script to help with GitHub Pages deployment
const fs = require("fs")
const path = require("path")

// Create .nojekyll file to prevent GitHub Pages from ignoring files that begin with an underscore
fs.writeFileSync(path.join(process.cwd(), "out", ".nojekyll"), "")

console.log("✅ Created .nojekyll file")
console.log("✅ Your static site is ready to be deployed to GitHub Pages!")
console.log("")
console.log("To deploy:")
console.log('1. Push the "out" directory to your GitHub repository')
console.log("2. Enable GitHub Pages in your repository settings")
console.log('3. Set the "Source" to the branch containing your "out" directory')
