import apiClient from '../util/api-client'

export default function ensureLoggedIn(router) {
  return () => {
    if(!apiClient.isAuthenticated()) {
      apiClient.refreshAuth()
        .then(response => {
          if (response.status_code != 200) {
            router.push("/sign-in")
          }
        })
    }
  }
}
