<template>
  <div>123</div>
</template>
<script>
export default {
  mounted () {
    // console.log('this.$store', this.$store)
    let edit_personal_info = {
      phone: null
    }
    this.$store.dispatch('personal_info/personal_info_edit', edit_personal_info)
  }
}
</script>