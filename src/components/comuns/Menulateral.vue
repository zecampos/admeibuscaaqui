<template lang="html">
  <div class="">
    <div class="navbar-default sidebar" role="navigation">
        <div class="sidebar-nav slimscrollsidebar">
            <div class="sidebar-head">
                <h3><span class="fa-fw open-close"><i class="ti-close ti-menu"></i></span> <span class="hide-menu">Navigation</span></h3>
            </div>
            <ul style="text-align: left;" class="nav" id="side-menu">
                <li style="padding: 70px 0 0;">
                    <a @click="goHome()" class="waves-effect"><i class="fa fa-signal fa-fw" aria-hidden="true"></i>Dashboard</a>
                </li>
                <li>
                    <a @click="goClientes()" class="waves-effect"><i class="fa fa-users fa-fw" aria-hidden="true"></i>Clientes</a>
                </li>
                <li>
                    <a @click="goUsers()" class="waves-effect"><i class="fa fa-user fa-fw" aria-hidden="true"></i>Usuários</a>
                </li>
                <!--<li>
                    <a href="fontawesome.html" class="waves-effect"><i class="fa fa-font fa-fw" aria-hidden="true"></i>Icons</a>
                </li>
                <li>
                    <a href="map-google.html" class="waves-effect"><i class="fa fa-globe fa-fw" aria-hidden="true"></i>Google Map</a>
                </li>
                <li>
                    <a href="blank.html" class="waves-effect"><i class="fa fa-columns fa-fw" aria-hidden="true"></i>Blank Page</a>
                </li>
                <li>
                    <a href="404.html" class="waves-effect"><i class="fa fa-info-circle fa-fw" aria-hidden="true"></i>Error 404</a>
                </li> -->

            </ul>
        </div>

    </div>
</div>
</template>

<script>
export default {
  methods: {
    goHome () {
      this.$router.push('/home')
    },
    goClientes () {
      this.$router.push('/clientes')
    },
    goUsers () {
      this.$router.push('/usuarios')
    }
  }
}
</script>

<style lang="css">
</style>
