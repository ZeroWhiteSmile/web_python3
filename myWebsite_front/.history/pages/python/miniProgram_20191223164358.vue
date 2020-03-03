<template>
  <div>123</div>
</template>
<script>
export default {
  mounted () {
    console.log('this.$store', this.$store)
    this.$store.dispatch('personal_info/edit_personal_info')
  }
}
</script>