<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <form>
          <div class="col-12 col-sm-12 col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4 col-xl-4 div-set">
            <div class="">
              <img class="img-responsive" src="../../assets/logo.png" alt="">
            </div>
            <div class="header-login">
              <h3 class="text-header">Login</h3>
            </div>
          <div class="form-group">
            <input v-model="usuario" type="text" class="form-control" id="exampleInputEmail1" placeholder="usuario">
          </div>
          <div class="form-group">
            <input  v-model="senha" type="password" class="form-control" id="exampleInputPassword1" placeholder="senha">
          </div>
          <button @click.prevent="logar()"  class="btn btn-default btn-block">Entrar</button>
        </br>
          </div>
        </form>
    </div>
  </div>
</div>
</template>
<script>
import loginmx from '../Mixins/Login.js'
export default {
  mixins: [loginmx],
  data () {
    return {
      usuario: '',
      senha: ''
  }
  },
  methods: {
    logar () {
      this.login(this.usuario, this.senha).then(
        response => {
          this.$router.push('/home')
          sessionStorage.setItem('token', response.sessionToken)
          sessionStorage.setItem('username', response.username)
          sessionStorage.setItem('email', response.email)
          console.log(response.sessionToken)
        },
        response => {
          console.log(response)
        }
      )

      }
    }
  }
</script>
<style lang="css" scoped>
.header-login {
  background-color: #f57c20;
}
.text-header{
  color: white;
  font-weight: 400;
  padding-bottom: 5px;
  padding-top: 5px;
}
.div-set {
  border-color: #cacaca;
  border-style: solid;
  border-width: 1px;
}
.btn-default {
  margin-bottom: 5px;
}

</style>
