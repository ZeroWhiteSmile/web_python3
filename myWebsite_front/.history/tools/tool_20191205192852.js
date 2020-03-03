import {
  isArray
} from "util"

export let promiseUrl = (url) => {
  // 判断地址是否存在
  // let isExist = document.querySelector("script")
  // console.log('isExist', isExist)
  let labelObj = window.document.head.childNodes
  for (let i = 0; i < labelObj.length; i++) {
    if (labelObj[0] === 'script') {
      console.log(12312, labelObj[0])
      // if (labelObj[0])
    }
  }
  // let labelArrFilter = labelArr.filter(res => {
  //   return res === 'script'
  // })
  console.log('document', )
  console.log('document', typeof labelArr)
  return new Promise((resolve, reject) => {
    window.onload = function () {
      resolve(BMap)
    }
    var script = document.createElement("script")
    script.type = "text/javascript"
    script.src = url
    script.onerror = reject
    document.head.appendChild(script)
    resolve('加载完成')
  })
}
