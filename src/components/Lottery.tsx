// DEPENDENCY
import { useState, useEffect } from 'react'

// COMPONENT
import { LottoBall } from './LottoBall'

// STYLE
import './Lottery.css'

// UTIL
type LotteryProps = {
  title?: string
  numBalls?: number
  maxNum?: number
}

export function Lottery({ title = 'lotto', numBalls = 6, maxNum = 40 }: LotteryProps) {
  const [ lottoNums, setLottoNums ] = useState<string[]>(Array(numBalls).fill(""))

  const handleClick = () => {
    generateLotto()
  }
  
  const generateLotto = () => {
    let bubble: string[] = []
    while( bubble.length < numBalls ) {
      bubble.push((Math.floor(Math.random() * maxNum) + 1).toString())
    }
    setLottoNums(bubble)
  }

  return (
    <div className="Lottery">
      <h2>
        { title }
      </h2>
      <div className="Lottery-list">
        {
          lottoNums.map(num => <LottoBall number={num}/>)
        }
      </div>
      <button onClick={handleClick}>Generate</button>
    </div>
  )
}