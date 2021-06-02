import devices from './apple-devices'

function getGPU() {
  const canvas = document.createElement('canvas')

  if (!canvas) {
    return null
  } 
  
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')

  if (!gl) {
    return null
  }
  
  const info = gl.getExtension('WEBGL_debug_renderer_info')

  if (info) {
    const renderer = gl.getParameter(info.UNMASKED_RENDERER_WEBGL)

    if (renderer !== 'Apple GPU') {
      return renderer
    }
  }

  return null
}

function detectAppleDevice(gpu) {
  const width = Math.max(window.screen.width, window.screen.height)
  const height = Math.min(window.screen.width, window.screen.height)

  const pixelRatio = window.devicePixelRatio

  let type

  const userAgent = window.navigator.userAgent.toLowerCase()
  // WIP
  // const iosVersion = userAgent.match(/CPU OS ([0-9]*)/)[1]

  if (userAgent.includes('ipad')) {
    type = 'iPad' 
  } else if (userAgent.includes('iphone') || userAgent.includes('ipod')) {
    type = 'iPhone'
  }

  const results = []

  if (!gpu) {
    gpu = getGPU()
  }

  devices.forEach(function(device) {
    if (
      device.width !== width || 
      device.height !== height || 
      device.pixelRatio !== pixelRatio ||
      device.type && device.type !== type
    ) {
      return
    }
    
    results.unshift(device)
  })

  if (results.length && gpu) {
    const filteredResults = results.filter(function(device) { 
      return device.gpu === gpu
    })

    if (filteredResults.length) {
      return filteredResults
    }
  }

  return results
}

export default detectAppleDevice