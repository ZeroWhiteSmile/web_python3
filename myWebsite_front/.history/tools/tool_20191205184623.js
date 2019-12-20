export let promiseUrl = (url) => {
  return new Promise((resolve, reject) => {
    window.onload = function () {
      resolve(BMap)
    }
    var script = document.createElement("script")
    script.type = "text/javascript"
    script.src = url
    script.onerror = reject
    document.head.appendChild(script)
    // 不需要resolve()
  })
}
