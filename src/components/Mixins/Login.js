import { homeHeader, loginServer } from '../Utils/Httputils'

export default {
  methods: {
    login (username, password) {
      const body = {username, password }
      console.log(body)
      return new Promise((resolve, reject) => {
        const options = homeHeader()
        this.$http.post(`${loginServer()}/login`, body, options)
          .then(response => {
            resolve(response.body)
          },
          response => {
            reject(response)
          }
          )
      })
    }
  }
}
