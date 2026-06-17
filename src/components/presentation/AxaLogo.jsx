// Minimal AXA-style wordmark for slide branding (white text + red slash).
export function AxaLogo({ className = '' }) {
  return (
    <svg
      className={`slide-axa ${className}`}
      width="74"
      height="34"
      viewBox="0 0 74 34"
      role="img"
      aria-label="AXA"
    >
      <rect x="0" y="0" width="74" height="34" fill="#fff" />
      <text
        x="37"
        y="24"
        textAnchor="middle"
        fontFamily="Anton, Arial, sans-serif"
        fontSize="22"
        letterSpacing="1"
        fill="#00008f"
      >
        AXA
      </text>
      <path d="M6 30 L34 4" stroke="#ff1721" strokeWidth="3" />
    </svg>
  )
}
