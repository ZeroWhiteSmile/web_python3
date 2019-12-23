<template>
  <div class="container">
    <logo></logo>
  </div>
</template>

<script>
import logo from '@/components/logo'
export default {
  components: {
    logo
  },
  mounted () {
    console.log(this.store)
  }
}
</script>

<style lang='scss' scoped>

</style>