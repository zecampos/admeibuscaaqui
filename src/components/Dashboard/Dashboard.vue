<template lang="html">
  <div class="container div-init">
    <h1>Dashboard</h1>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <chartjs-bar :datalabel="mylabel" :labels="mylabels" :data="mydata" :width="mywidth" :height="myheight"></chartjs-bar>
    </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">

        </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      mywidth : 500,
      myheight : 500,
      mylabel : 'Abertura de clientes',
      mylabels : ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      mydata : [60, 40, 70, 65, 85, 93, 80, 82, 74, 70, 95, 100]
        }
      }
}
</script>

<style lang="css" scoped>
.div-init {
  margin-left: 20%;
}
</style>
