/**
 * Browser is Edge
 * @return {Boolean}
 */
function browserIsEdge() {
    return window.navigator.userAgent.indexOf('Edge/') > -1
}

export { browserIsEdge }