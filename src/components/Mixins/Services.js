import { homeHeader, userServer, homeHeaderToken } from '../Utils/Httputils'

export default {
  methods: {
    getUser () {
      return new Promise((resolve, reject) => {
        const options = homeHeader()
          this.$http.get(`${userServer()}`, options)
          .then(response => {
            resolve(response.body.results)
          },
          response => {
            reject(response)
          }
        )
      })

    },
    postuser (user) {
      return new Promise((resolve, reject) => {
          const options = homeHeader()
          this.$http.post(`${userServer()}`, user, options)
          .then(response => {
            resolve(response.body)
          },
          response => {
            reject(response)
          }
        )
      })

    },
    deleteUser (id) {
      return new Promise((resolv, reject) => {
        const options = homeHeaderToken()
        console.log(options)
        this.$http.delete(`${userServer()}${id}`, options)
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
