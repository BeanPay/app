import apiClient from '../util/api-client'

export default function ensureLoggedOut(router) {
  return () => {
    if(apiClient.isAuthenticated()) {
      router.push("/")
    } else {
      apiClient.refreshAuth()
        .then(response => {
          if (response.status_code == 200) {
            router.push("/")
          }
        })
    }
  }
}
