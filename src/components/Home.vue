<template lang="html">
<div class="">
  <topheader></topheader>
  <menulateral></menulateral>
<router-view/>
</div>
</template>

<script>
import Topheader from '@/components/comuns/Topheader'
import Menulateral from '@/components/comuns/Menulateral.vue'
export default {
  components: {
    Topheader,
    Menulateral
  }
}
</script>

<style lang="css">
</style>
