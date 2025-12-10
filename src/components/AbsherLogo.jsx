// Official Absher Logo Component
// Uses the official Absher logo from absher.sa

const ABSHER_LOGO_URL = 'https://www.absher.sa/portal/individuals/assets/images/absher_logo.svg'

function AbsherLogo({ variant = 'green', className = '', height = 48, width = 'auto' }) {
  const style = {
    height: `${height}px`,
    width: width,
    // Apply filter to make white version for dark backgrounds
    ...(variant === 'white' && { filter: 'brightness(0) invert(1)' })
  }

  return (
    <img 
      src={ABSHER_LOGO_URL}
      alt="أبشر - Absher"
      className={className}
      style={style}
    />
  )
}

export default AbsherLogo
