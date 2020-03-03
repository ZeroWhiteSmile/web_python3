<template>
  <div>123</div>
</template>
<script>
export default {
  mounted () {
    console.log(231231, this.$store)
    this.$store.dispatch('edit_personal_info')
  }
}
</script>