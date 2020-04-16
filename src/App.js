import React,{ useState }from 'react';

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)

  const reset = () => setCount(0)
  const multiplication = () => setCount(previousCount => previousCount * 2)
  const divide3 = () => setCount(previousCount => { 
    if (previousCount % 3 == 0) {
      return previousCount / 3;
    } else {
      return previousCount;
    }
  })

  return (
    <>
    <div>count: {count}</div>
      <button onClick={increment}>増やす</button>
      <button onClick={decrement}>減らす</button>
      <div>
        <button onClick={increment2}>増やす</button>
        <button onClick={decrement2}>減らす</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
        <button onClick={multiplication}>×２</button>
        <button onClick={divide3}>３の倍数の時だけ割る</button>
      </div>
    </>
  )
}

export default App;
