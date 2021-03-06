const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  apptype: state => state.apptype.type,
  appname: state => state.apptype.name,
  appground: state => state.appground.id,
  appid: state => state.apptype.appid,
  name: state => state.user.name,
  roles: state => state.user.roles
}
export default getters
