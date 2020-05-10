/**
 * Check user platform is Mac OS
 * Attention! the method also defines iPad from 2019
 * @return {Boolean}
 */
function deviceIsWin() {
    return window.navigator.platform.toUpperCase().indexOf('MAC') > -1
}

export { deviceIsWin }