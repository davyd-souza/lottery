// STYLE
import './LottoBall.css'

// UTIL
type LottoBallProps = {
  number: string
}

export function LottoBall({ number = "" }: LottoBallProps) {
  return (
    <p className="LottoBall">{ number }</p>
  )
}