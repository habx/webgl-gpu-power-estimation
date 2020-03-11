import { findMatch } from './utils.js';
import { database } from './database'
import detectAppleDevice from './apple-device-detection'

function extractValue(reg, str) {
    const matches = str.match(reg);
    return matches && matches[0];
}

function getVendorRenderer(gl) {

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (!debugInfo) {

        return null;

    }

    const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);

    return { vendor, renderer };

}

function parseGpuInfo(vendor, renderer) {

    // Full card description and webGL layer (if present)
    const layer = extractValue(/(ANGLE)/g, renderer);
    const name = extractValue(/(NVIDIA|AMD|Intel)\D*\d*\S*/, renderer) || renderer;

    return {

        name: name.trim(),

        unmasked: {
            vendor,
            renderer,
        },

        integrated: /Intel/i.test(name),
        layer,

    };

}

function getBasicInfo(glOrRenderer = null, vendor = null) {

    glOrRenderer = glOrRenderer || document.createElement('canvas').getContext('webgl');

    let renderer = null;
    if (typeof glOrRenderer === 'string') {

        renderer = glOrRenderer;

    } else {

        const vr = getVendorRenderer(glOrRenderer);
        if (!vr) return null;

        renderer = vr.renderer;
        vendor = vr.vendor;

    }

    return parseGpuInfo(vendor, renderer);

}

function rendererToGpu(data, renderer) {

    const { matches, score } = findMatch(renderer, data);

    return score > 0.4 ? matches[0] : null;

}

function getDetailedInfo(data = database, glOrRenderer = null) {

    glOrRenderer = glOrRenderer || document.createElement('canvas').getContext('webgl');

    let renderer = null;
    if (typeof glOrRenderer === 'string') {

        renderer = glOrRenderer;

    } else {

        const vr = getVendorRenderer(glOrRenderer);
        if (!vr) return null;

        renderer = vr.renderer;

    }

    if (renderer === 'Apple GPU') {
        const appleDevices = detectAppleDevice()
        if (appleDevices) {
            const lastDevice = appleDevices[appleDevices]

            const gpus = appleDevices.map(function(appleDevice) {
                return rendererToGpu(data, appleDevice.gpu)
            })
            const result = { names: [], vendor: 'Apple', performance: 0 }
            gpus.forEach(function(gpu, index) {
                result.names = result.names.concat(gpu.names)
                result.performance = ((index * result.performance) + gpu.performance) / (index + 1)
            })
            return result
        } else {
            return null
        }
    }

    return rendererToGpu(data, renderer);

}

export { getDetailedInfo, getBasicInfo, database };
