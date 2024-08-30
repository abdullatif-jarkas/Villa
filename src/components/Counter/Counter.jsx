import './Counter.css'


const Counter = ({ num, text1, text2 }) => {
  
  return (
    <div className='counter'>
      <h2 className='counter-num'>{num}</h2>
      <div>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  )
}

export default Counter