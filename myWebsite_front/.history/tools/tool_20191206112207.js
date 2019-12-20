export let promiseUrl = (url) => {
  return new Promise((resolve, reject) => {
    // 判断地址是否存在
    let haveChild = () => {
      new Promise((resolve, reject) => {
        let labelObj = window.document.head.childNodes
        for (let i = 0; i < labelObj.length; i++) {
          if (labelObj[i].tagName) {
            if (labelObj[i].tagName.toString().toLowerCase() === 'script') {
              if (labelObj[i].src === url) {
                console.log(labelObj[i])
                window.document.head.removeChild(labelObj[i])
              }
            }
          }
        }
        resolve()
      })
    }
    let createScript = () => {
      var script = document.createElement("script")
      script.type = "text/javascript"
      script.src = url
      script.onerror = reject
      document.head.appendChild(script)
    }
    createScript()
    setTimeout(() => {
      resolve('加载完成')
    }, 200)
    // 页面加载中断，window.onload会停止执行
    // try {
    //   window.onload = function () {
    //     console.log('window.onload', BMap)
    //     resolve()
    //   }
    // } catch (error) {

    // }

  })
}
