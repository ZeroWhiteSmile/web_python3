import {
  isArray
} from "util"

export let promiseUrl = (url) => {
  // 判断地址是否存在
  let labelObj = window.document.head.childNodes
  for (let i = 0; i < labelObj.length; i++) {
    if (labelObj[i].tagName) {
      if (labelObj[i].tagName.toString().toLowerCase() === 'script') {
        console.log(12312, labelObj[i].src)
        if (labelObj[i].src === url) {
          window.document.head.removeChild(labelObj[i])
        }
      }
    }
  }
  return new Promise((resolve, reject) => {
    // window.onload = function () {
    //   resolve('加载完成')
    // }
    var script = document.createElement("script")
    script.type = "text/javascript"
    script.src = url
    script.onerror = reject
    document.head.appendChild(script)
    resolve('加载完成')
  })
}
