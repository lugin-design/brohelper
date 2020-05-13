/**
 * Browser scrollbar width
 * @return {Number}
 */
function browserScrollBarWidth() {
    let div = document.createElement('div')
    div.style.visibility = 'hidden'
    div.style.position = 'absolute'
    div.style.overflowY = 'scroll'
    div.style.width = '50px'
    div.style.height = '50px'

    document.body.appendChild(div)
    let sw = div.offsetWidth - div.clientWidth
    document.body.removeChild(div)

    return sw
}

export { browserScrollBarWidth }