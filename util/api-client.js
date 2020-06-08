const baseURL = process.env.API_BASE_URL

function login(email, password) {
  return fetch(`${baseURL}/auth/login`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      email: email,
      password: password
    }),
  })
  .then(response => response.json())
  .then(responseBody => {
    // Automatically save the token
    if(responseBody.status_code == 200) {
      saveAccessToken({
        token: responseBody.result.access_token,
        expiration: responseBody.result.access_token_expiration,
      })
    }
    return responseBody;
  })
}

function refreshAuth() {
  return fetch(`${baseURL}/auth/refresh`, {
    method: 'POST',
    credentials: 'include'
  })
  .then(response => response.json())
  .then(responseBody => {
    // Automatically save the token
    if(responseBody.status_code == 200) {
      console.log("REFRESH OK", responseBody)
      saveAccessToken({
        token: responseBody.result.access_token,
        expiration: responseBody.result.access_token_expiration,
      })
    }
    return responseBody;
  })
}

// Check to see if our token expires within the next 10 seconds
// we'll consider that expired, as if we consider it still active
// we run the risk of the proceeding request failing due to it expiring
function isAuthenticated() {
  const accessToken = getAccessToken();
  if (accessToken == null) {
    return false
  }
  var now = new Date();
  now.setSeconds(now.getSeconds() + 10);
  var expiration = new Date(accessToken.expiration)
  return now < expiration;
}

/*
if(authenticated, and we aren't expiring soon) {
  resolve immediately (OK)
}

if(we have expired, or are expiring soon) {
  if (we have a refresh token) {
    refresh the auth
      if OK resolve (OK)
      if Not OK fail immedately (ERROR)
  }
  Fail immediately (ERROR)
}



if(!authenticated()) {
  if(canRefresh() {
    doTheRefresh
  }
  kickToLoginPage
}


*/

export default {
  login,
  refreshAuth,
  isAuthenticated
}


// --------------------------
// ------ Data Store --------
// --------------------------

const ACCESS_TOKEN = "access_token";
const ACCESS_TOKEN_EXPIRATION = "access_token_expiration";

function saveAccessToken(accessToken) {
  window.localStorage.setItem(ACCESS_TOKEN, accessToken.token);
  window.localStorage.setItem(ACCESS_TOKEN_EXPIRATION, accessToken.expiration);
}

function getAccessToken() {
  var token = window.localStorage.getItem(ACCESS_TOKEN);
  var expiration = window.localStorage.getItem(ACCESS_TOKEN_EXPIRATION);
  if (token && expiration) {
    return {
      token: token,
      expiration: expiration
    }
  }
  return null
}
