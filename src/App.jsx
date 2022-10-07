import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [unidade, setUnidade] = useState(0);
  const [dezena, setDezena] = useState(0);
  const [centena, setCentena] = useState(0);
  const [mil, setMil] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if(unidade >= 9) {
        setUnidade(0)
        if(dezena >= 9) {
          setDezena(0)
          if(centena >= 9) {
            setCentena(0)
            if(mil >= 9) {
              setMil(0)
            } else {
              setMil(mil + 1)
            }
          } else {
            setCentena(centena + 1)
          }
        } else {
          setDezena(dezena + 1)
        }
      } else {
        setUnidade(unidade + 1)
      }
    }, 1000)
  }, [unidade])

  return (
    <div className="App">
      <header className="App-header">
        <div className='bg-white/10 relative min-h-12 max-h-12 overflow-y-hidden border border-2 flex shadow-xl shadow-white/5 rounded-full'>
          <div className='flex flex-col w-[44px] min-w-12 max-w-12 min-h-12 max-h-12 duration-300' style={{transform: `translateY(-${mil*44}px)`}}>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>0</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>1</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>2</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>3</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>4</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>5</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>6</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>7</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>8</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>9</div>
          </div>
          <div className='flex flex-col w-[44px] min-w-12 max-w-12 min-h-12 max-h-12 duration-300' style={{transform: `translateY(-${centena*44}px)`}}>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>0</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>1</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>2</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>3</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>4</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>5</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>6</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>7</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>8</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>9</div>
          </div>
          <div className='flex flex-col w-[44px] min-w-12 max-w-12 min-h-12 max-h-12 duration-300' style={{transform: `translateY(-${dezena*44}px)`}}>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>0</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>1</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>2</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>3</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>4</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>5</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>6</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>7</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>8</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>9</div>
          </div>
          <div className='flex flex-col min-min-h-[44px] max-h-[44px] max-min-h-[44px] max-h-[44px] duration-300' style={{transform: `translateY(-${unidade*44}px)`}}>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>0</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>1</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>2</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>3</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>4</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>5</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>6</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>7</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>8</div>
            <div className='w-12 min-h-[44px] max-h-[44px] flex justify-center'>9</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
