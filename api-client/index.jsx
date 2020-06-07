const baseURL = process.env.API_BASE_URL

export function login(email, password) {
  return fetch(`${baseURL}/auth/login`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      email: email,
      password: password
    }),
  })
  .then(response => response.json());
}

export default {
  login
}
