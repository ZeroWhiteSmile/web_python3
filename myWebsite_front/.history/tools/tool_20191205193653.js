import {
  isArray
} from "util"

export let promiseUrl = (url) => {
  // 判断地址是否存在
  let continueFlag = true
  let labelObj = window.document.head.childNodes
  for (let i = 0; i < labelObj.length; i++) {
    if (labelObj[i].tagName) {
      if (labelObj[i].tagName.toString().toLowerCase() === 'script') {
        if (labelObj[i].src === url) {
          return false
        }
      }
    }
  }
  return new Promise((resolve, reject) => {
    console.log(12312, continueFlag)
    if (continueFlag) {
      window.onload = function () {
        resolve(BMap)
      }
      var script = document.createElement("script")
      script.type = "text/javascript"
      script.src = url
      script.onerror = reject
      document.head.appendChild(script)
      resolve('加载完成')
    }
    resolve('加载完成')
  })
}
