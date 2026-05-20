export function PatternBg() {
  return (
    <svg
      className="pattern-bg"
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="arabesque" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <polygon
            points="40,2 78,22 78,58 40,78 2,58 2,22"
            fill="none"
            stroke="#C9922A"
            strokeWidth="0.8"
          />
          <polygon
            points="40,16 66,30 66,50 40,64 14,50 14,30"
            fill="none"
            stroke="#C9922A"
            strokeWidth="0.4"
          />
          <circle cx="40" cy="40" r="6" fill="none" stroke="#C9922A" strokeWidth="0.6" />
          <line x1="40" y1="2" x2="40" y2="16" stroke="#C9922A" strokeWidth="0.5" />
          <line x1="78" y1="22" x2="66" y2="30" stroke="#C9922A" strokeWidth="0.5" />
          <line x1="78" y1="58" x2="66" y2="50" stroke="#C9922A" strokeWidth="0.5" />
          <line x1="40" y1="78" x2="40" y2="64" stroke="#C9922A" strokeWidth="0.5" />
          <line x1="2" y1="58" x2="14" y2="50" stroke="#C9922A" strokeWidth="0.5" />
          <line x1="2" y1="22" x2="14" y2="30" stroke="#C9922A" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#arabesque)" />
    </svg>
  )
}

