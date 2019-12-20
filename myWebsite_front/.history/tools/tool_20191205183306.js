export function promiseMap(ak, type) {
  return new Promise((resolve, reject) => {
    window.onload = function () {
      resolve(BMap)
    }
    var script = document.createElement("script")
    script.type = "text/javascript"
    // 注意：v=3.0 不是v=2.0
    if (type === 'baidu') {
      script.src = "http://api.map.baidu.com/api?v=3.0&ak=" + ak + "&callback=init"
    } else if (type === 'google') {
      script.src = "http://api.map.baidu.com/api?v=3.0&ak=" + ak + "&callback=init"
    }
    script.onerror = reject
    document.head.appendChild(script)
    // 不resolve()，then方法没法执行
    resolve()
  })
}
