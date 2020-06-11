const baseURL = process.env.API_BASE_URL

// Register a new user. This does not give an access
// token / refresh token, so you must login after calling
// this if it is intended to give the user a seamless
// user creation experience.
//
// The reason why this is separated out is there may
// be an additional step in the future between register /
// first login that requires the user to verify their email.
function register(email, password) {
  return fetch(`${baseURL}/users`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      email: email,
      password: password
    }),
  })
  .then(response => response.json())
}


// Login the user form their email & password.
// If the login is successful, we automatically will
// store the AccessToken in local storage.
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

// Refresh our Auth from our refresh_token cookie.
// If the refresh is successful, we automatically will
// store the AccessToken in local storage.
function refreshAuth() {
  return fetch(`${baseURL}/auth/refresh`, {
    method: 'POST',
    credentials: 'include'
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

// authenticatedRequest triggers a generic request function
// as function(accessToken).  This will go through our
// token refresh flow in the event the token has expired
function authenticatedRequest(requestFunction) {
  if(isAuthenticated()) {
    const accessToken = getAccessToken()
    return requestFunction(accessToken.token)
  } else {
    return refreshAuth()
      .then(response => {
        if (response.status_code == 200) {
          return requestFunction(response.result.access_token)
        }
      })
  }
}

function getBills(accessToken) {
  return fetch(`${baseURL}/bills`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
    credentials: 'include'
  })
  .then(response => response.json())
}

// Gets all payments from (inclusive) to (exclusive)
function getPayments(from, to) {
  return function(accessToken) {
    return fetch(`${baseURL}/payments?from=${from}&to=${to}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
      credentials: 'include'
    })
    .then(response => response.json())
  }
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

export default {
  login,
  register,
  refreshAuth,
  isAuthenticated,
  authenticatedRequest,
  getBills,
  getPayments,
}

// ---------------------------------------
// ------ Access Token Data Store --------
// ---------------------------------------

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
