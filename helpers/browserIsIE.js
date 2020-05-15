/**
 * Browser is Internet Explorer
 * @return {Boolean}
 */
function browserIsIE() {
    const ua = window.navigator.userAgent
    // <= IE10 || IE11
    return ua.indexOf('MSIE') > -1 || ua.indexOf('Trident/') > -1
}

export { browserIsIE }