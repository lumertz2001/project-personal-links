function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  html.classList.toggle("light")
}

let text = document.getElementById("copy-text").innerHTML
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text)
    console.log("Content copied to clipboard")
  } catch (err) {
    console.error("Failed to copy: ", err)
  }
}
