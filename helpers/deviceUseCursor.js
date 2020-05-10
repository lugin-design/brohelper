/**
 * Check user devise use cursor(mouse) or not
 * @return {Boolean}
 */
function deviceUseCursor() {
    return window.matchMedia('(hover:hover)').matches
}

export { deviceUseCursor }