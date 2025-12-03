import type React from "react"
export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text
        x="0"
        y="30"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="28"
        fontWeight="600"
        fill="currentColor"
        letterSpacing="-0.02em"
      >
        Spa Agent
      </text>
    </svg>
  )
}
