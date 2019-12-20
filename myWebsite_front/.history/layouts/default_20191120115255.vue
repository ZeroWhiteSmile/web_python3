<template>
  <div class="content" :style="`height: ${clientH}px;`">
    <navigationBar class="content_navigation"></navigationBar>
    <nuxt class="content_content" />
    <footer></footer>
  </div>
</template>
<script>
import navigation_bar from '@/components/navigation_bar'
import footer_bar from '@/components/footer_bar'
export default {
  components: {
    navigation_bar,
    footer_bar
  },
  data () {
    return {
      clientH: window.innerHeight
    }
  },
  mounted () {
    // 最外层高度
    window.addEventListener('resize', () => {
      this.clientH = window.innerHeight
    })
  }
}
</script>

<style lang='scss' scoped>
.content{
  height: 100%;
  display: flex;
  .content_navigation{
    flex-basis: 200px;
  }
  .content_content{
    flex-grow: 1;
  }
}
</style>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
