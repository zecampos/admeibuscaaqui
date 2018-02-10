

var homeHeader = () => {
  const headers = {
    'Content-Type': 'application/json',
    'X-Parse-Application-Id': 'M9pc7HMaXAMIz5Rcz6DBHlYSWKO96aChoYOZIUhY',
    'X-Parse-REST-API-Key': 'KDqg9eee1G7kIpTnvyqCrUsbQzLwXWpaDyT22yqq'
  }
  const options = { headers}
  return options
}
var homeHeaderToken = () => {
  const headers = {
    'Content-Type': 'application/json',
    'X-Parse-Application-Id': 'M9pc7HMaXAMIz5Rcz6DBHlYSWKO96aChoYOZIUhY',
    'X-Parse-Master-Key': '2rOyZY1MdFaWfKnu7rSuo6ofmgsqZ6CKeYcmGzzV',
    'X-Parse-Session-Token': sessionStorage.getItem('token')
  }
  const optionsToken = { headers}
  return optionsToken
}

var homeServer = () => {
  return 'https://parseapi.back4app.com/classes/'
}
var userServer = () => {
  return 'https://parseapi.back4app.com/users/'
}
var loginServer = () => {
  return 'https://parseapi.back4app.com'
}
export { homeHeader, homeServer, loginServer, userServer, homeHeaderToken}
