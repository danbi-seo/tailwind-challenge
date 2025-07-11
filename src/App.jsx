import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const changingBgColorClass = (currentValue) => {
    if (currentValue >= 500) {
      return 'bg-gradient-to-br from-indigo-700 to-purple-800';
    } else if (currentValue >= 50) {
      return 'bg-gradient-to-br from-blue-600 to-indigo-700';
    } else if (currentValue >= 5) {
      return 'bg-gradient-to-br from-emerald-500 to-cyan-600';
    } else if (currentValue <= -500) {
      return 'bg-gradient-to-br from-yellow-700 to-orange-800';
    } else if (currentValue <= -50) {
      return 'bg-gradient-to-br from-orange-600 to-red-700';
    } else if (currentValue <= 5) {
      return 'bg-gradient-to-br from-rose-500 to-red-600';
    } else {
      return 'bg-gradient-to-br from-gray-700 to-gray-900';
    }
  } 

  const handleIncrement = (value) => {
    setCount(prev => prev + value);
  };

  const handleDecrement = (value) => {
    setCount(prev => prev - value);
  };

  const bgColorClass = changingBgColorClass(count);


  return (
    <div className={twMerge(`min-h-screen flex items-center justify-center transition-all duration-700`, bgColorClass)}>
      <div className='bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-3xl shadow-2xl text-center text-black w-96 font-sans '>
        <div className="text-3xl font-medium mb-8">배경색 바꾸기 카운터</div>
        <div className='text-5xl font-thin mb-12'>{count}</div> 
        
        <div className='flex justify-center mb-6 space-x-3'>
          <button onClick={() => {handleIncrement(1)}}
            className={twMerge("flex-1 py-3 px-4 bg-white bg-opacity-30 rounded-2xl text-xl font-medium shadow-md hover:bg-opacity-40 transition-all duration-200 active:scale-95", "active:-translate-y-1")}
            >+1</button>
          <button onClick={() => {handleIncrement(10)}}
            className={twMerge("flex-1 py-3 px-4 bg-white bg-opacity-30 rounded-2xl text-xl font-medium shadow-md hover:bg-opacity-40 transition-all duration-200 active:scale-95", "active:-translate-y-1")}
            >+10</button>
          <button onClick={() => {handleIncrement(100)}}
            className={twMerge("flex-1 py-3 px-4 bg-white bg-opacity-30 rounded-2xl text-xl font-medium shadow-md hover:bg-opacity-40 transition-all duration-200 active:scale-95", "active:-translate-y-1")}
            >+100</button>
        </div>
        
        <div className='flex justify-center mb-6 space-x-3'>
          <button onClick={() => {handleDecrement(1)}}
            className={twMerge("flex-1 py-3 px-4 bg-white bg-opacity-30 rounded-2xl text-xl font-medium shadow-md hover:bg-opacity-40 transition-all duration-200 active:scale-95", "active:-translate-y-1")}
            >-1</button>
          <button onClick={() => {handleDecrement(10)}}
            className={twMerge("flex-1 py-3 px-4 bg-white bg-opacity-30 rounded-2xl text-xl font-medium shadow-md hover:bg-opacity-40 transition-all duration-200 active:scale-95", "active:-translate-y-1")}
            >-10</button>
          <button onClick={() => {handleDecrement(100)}} 
            className={twMerge("flex-1 py-3 px-4 bg-white bg-opacity-30 rounded-2xl text-xl font-medium shadow-md hover:bg-opacity-40 transition-all duration-200 active:scale-95", "active:-translate-y-1")}
            >-100</button>
        </div>
      </div>
    </div>
  )
};

export default App
