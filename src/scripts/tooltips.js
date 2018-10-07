let Tooltip = {}
let tt = document.querySelector('.tooltip')

Tooltip.show = ( e, tooltip ) => {
    let text = ''

    if ( tooltip.type == 'btn-tooltip' ) {
        switch ( tooltip.content ) {
            case 'barbell-squat':
                text = 'barbell squat tooltip'
                break
            case 'leg-extension':
                text = 'leg extension tooltip'
                break
            case 'calf-raise':
                text = 'calf raise tooltip'
                break
            default:
                return
        }

        tt.innerHTML = text
        tt.classList.add('active')

        let anchorPos = e.target.getBoundingClientRect()
        let ttPos = tt.getBoundingClientRect()

        tt.style.left = anchorPos.left + 'px'
        tt.style.top = anchorPos.bottom + 'px'
    }
}

Tooltip.hide = () => {
    tt.classList.remove('active')
}