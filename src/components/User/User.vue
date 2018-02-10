<template lang="html">
  <div class="container div-init">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">

      </div>
      <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
      </br>
      </br>
      </br>
        <div class="div-header text-center">
          <h5>Usuários</h5>
          {{usuario}}
            <a class="add-icon" @click="abrirCadastro()"><icon name="plus-circle" ></icon></a>
        </div>

        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <td>Nome</td>
              <td>Usuário</td>
              <td>E-mail</td>
              <td>Função</td>
              <td>Opções</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in usuario">
              <td>{{item.nome}}</td>
              <td>{{item.username}}</td>
              <td> {{item.objectId}}</td>
              <td> {{item.departamento}}</td>
              <td>
                <a href=""><icon class="" name="edit"></icon></a>
                <a @click="deletar(item.objectId)"><icon class="remove-icon" name="trash"></icon></a>
              </td>
            </tr>

          </tbody>
      </table>
      </div>

    </div>
    <modal  :width="800"
            :height="'100%'"
            :scrollable="true"
            :resizable="true"
            name="cadastro">
  <div class="container">
  </br>
  </br>
  </br>
    <div class="row">

      <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
          <a class="icon-close" @click="fecharCadastro()"><icon class="" name="close"></icon></a>
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <form class="form-horizontal">
          <div class="form-group">
            <label class="col-sm-1 control-label">Nome</label>
            <div class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
              <input v-model="user.nome" type="text" class="form-control"  placeholder="Nome">
            </div>
          </div>
  <div class="form-group">
    <label class="col-sm-1 control-label">Email</label>
    <div class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
      <input type="email" v-model="user.email" class="form-control"  placeholder="Email">
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-1 control-label">Usuário</label>
    <div class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
      <input v-model="user.username" type="text" class="form-control"  placeholder="Nome">
    </div>
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="col-sm-1 control-label">Password</label>
    <div class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
      <input v-model="user.password" type="password" class="form-control" id="inputPassword3" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-1 control-label">Departamento</label>
    <div class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
      <select  v-model="user.departamento" class="form-control">
      <option>Comercial</option>
      <option>Financeiro</option>
      <option>Comercial</option>
      <option>Marketing</option>
    </select>
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-1 control-label">Usuário Master</label>
    <div class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
      <select v-model="user.master" class="form-control">
      <option>Não</option>
      <option>Sim</option>
    </select>
    </div>
  </div>

  <div class="form-group">
    <div class="col-md-offset-4 col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
      <button @click="cadastrarUser()" class="btn btn-default">Cadastrar</button>
    </div>
  </div>
</form>
      </div>
    </div>
  </div>
</modal>
  </div>
</template>

<script>
import servicesmx from '../Mixins/Services.js'
import Icon from 'vue-awesome/components/Icon'
export default {
  mixins: [servicesmx],
  components: {
     Icon
  },
  data () {
    return {
      usuario: {
        nome: '',
        username: '',
        password: '',
        email: '',
        departamento: '',
        master: ''
      },
      user: {
        nome: '',
        username: '',
        password: '',
        email: '',
        departamento: '',
        master: ''
      }
    }
  },
  created () {
    this.listarUsuarios()
  },
  methods: {
    listarUsuarios () {
      this.getUser().then(
        response => {
          this.usuario = response
          console.log(this.usuario)
        },
        response => {
          console.log('Erro ao lista Usuários')
        }
      )
    },
    abrirCadastro () {
       this.$modal.show('cadastro');
    },
    fecharCadastro () {
    this.$modal.hide('cadastro');
  },
  cadastrarUser () {
    this.postuser(this.user).then(
      response => {
        console.log(response)
      },
      response => {
          console.log(response)
      }
    )
    this.fecharCadastro()
  },
  deletar () {
    console.log(this.usuario.objectId)
    /* this.deleteUser(this.usuario.objectId).then(
      response => {
        console.log(response)
      },
      response => {
          console.log(response)
      }
    ) */
  }


  }
}
</script>

<style lang="css" scoped>
.div-init {
  margin-left: 20%;
}
.div-header{
  display: flex;
  padding-left: 50%;
}
.add-icon{
  margin-left: 1%;
  margin-right: auto;
  width: 2em;
  margin-top: 1.5%;

}
.fa-icon {
  width: auto;
  height: 1.5em; /* or any other relative font sizes */

  /* You would have to include the following two lines to make this work in Safari */
  max-width: 100%;
  max-height: 100%;
}
.remove-icon {
  color: #bf1919;
}
.icon-close {
  margin-left: 85%;
}
</style>
