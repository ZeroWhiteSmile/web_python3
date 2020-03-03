<template>
  <div class="container" ref='container'>
   
  </div>
</template>

<script>
export default {
  components: {
  },
  mounted () {
    let clientH = window.innerHeight
    console.log('clientH', clientH)
    this.container.style.height = clientH + 'px'
  }
}
</script>

<style lang='scss' scoped>

</style>