let DEBUG = false
let API_KEY = null
let LANGUAGE = "en"
let REGION = null
const GOOGLE_API = "https://maps.googleapis.com/maps/api/geocode/json"

function log(message, warn = false) {
  if (DEBUG) {
    if (warn) {
      console.warn(message)
    } else {
      console.log(message)
    }
  }
}

async function handleUrl(url) {
  const response = await fetch(url).catch(() =>
    Promise.reject(new Error("Error fetching data"))
  )

  const json = await response.json().catch(() => {
    log("Error parsing server response")
    return Promise.reject(new Error("Error parsing server response"))
  })

  if (json.status === "OK") {
    log(json)
    return json
  }
  log(
    `${json.error_message}.\nServer returned status code ${json.status}`,
    true
  )
  return Promise.reject(
    new Error(
      `${json.error_message}.\nServer returned status code ${json.status}`
    )
  )
}

export default {
  setApiKey(apiKey) {
    API_KEY = apiKey
  },

  setLanguage(language) {
    LANGUAGE = language
  },

  setRegion(region) {
    REGION = region
  },

  enableDebug(flag = true) {
    DEBUG = flag
  },

  async fromLatLng(lat, lng, apiKey, language, region) {
    if (!lat || !lng) {
      log("Provided coordinates are invalid", true)
      return Promise.reject(new Error("Provided coordinates are invalid"))
    }

    const latLng = `${lat},${lng}`
    let url = `${GOOGLE_API}?latlng=${encodeURIComponent(latLng)}`

    if (apiKey || API_KEY) {
      API_KEY = apiKey || API_KEY
      url += `&key=${API_KEY}`
    }

    if (language || LANGUAGE) {
      LANGUAGE = language || LANGUAGE
      url += `&language=${LANGUAGE}`
    }

    if (region || REGION) {
      REGION = region || REGION
      url += `&region=${encodeURIComponent(REGION)}`
    }

    return handleUrl(url)
  },

  async fromAddress(address, apiKey, language, region) {
    if (!address) {
      log("Provided address is invalid", true)
      return Promise.reject(new Error("Provided address is invalid"))
    }

    let url = `${GOOGLE_API}?address=${encodeURIComponent(address)}`

    if (apiKey || API_KEY) {
      API_KEY = apiKey || API_KEY
      url += `&key=${API_KEY}`
    }

    if (language || LANGUAGE) {
      LANGUAGE = language || LANGUAGE
      url += `&language=${LANGUAGE}`
    }

    if (region || REGION) {
      REGION = region || REGION
      url += `&region=${encodeURIComponent(REGION)}`
    }

    return handleUrl(url)
  },
}
