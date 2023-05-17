import React, { useState } from 'react';

function Calculator() {
    const [input, setInput] = useState('');
    const [resultado, setResultado] = useState('');
  
    function handleButtonClick(digit) {
      if (digit === '=') {
        setInput(eval(input).toString());
      } else if (digit === 'AC') {
        setInput('');
        setResultado('');
      } else {
        setInput(input + digit);
      }
    }
  
    function calcular() {
      try {
        const resultadoCalculado = eval(input);
        setResultado(resultadoCalculado.toString());
        setInput(resultadoCalculado.toString());
      } catch (error) {
        setResultado('Error en la expresión');
      }
    }

  return (
    <div className='bg-gray-600 items-center justify-center flex flex-1 flex-col max-h-screen h-screen'>
      <div className=' flex flex-col items-center'>
        <h1 className='mt-5 text-white text-2xl font-bold'>My first Calculator </h1>
        <h3 className='mb-5 text-white text-md '>josue abreu </h3>
      </div>
      <form className='flex shadow-m flex-col bg-slate-300 w-96 h-96 rounded-sm'>
        <div className='font-bold flex-row flex p-4'>
          <input
            type="text"
            className='w-44 text-center mr-10 rounded-md'
            name="texte"
            value={input}
            onChange={event => setInput(event.target.value)}
          />
          <button type='button' className='bg-orange-500 w-28 h-10 rounded bor' onClick={calcular}>Calcular</button>
        </div>
        <hr />
        <div className='flex flex-row'>
          <div className='text-white p-2 flex-col-reverse'>
            <button type="button" className='text-black shadow-xl bg-gray-50 p-1 m-2 w-16 h-14 rounded-full' onClick={() => handleButtonClick('AC')}>AC</button>
            <button type="button" className='shadow-xl bg-slate-500 p-1 m-2 w-16 h-14 rounded-full' onClick={() => handleButtonClick('1')}>1</button>
            <button type="button" className='shadow-xl bg-slate-500 p-1 m-2 w-16 h-14 rounded-full' onClick={() => handleButtonClick('2')}>2</button>
            <button type="button" className='shadow-xl bg-slate-500 p-1 m-2 w-16 h-14 rounded-full' onClick={() => handleButtonClick('3')}>3</button>
            <button type="button" className='shadow-xl bg-slate-500 p-1 m-2 w-16 h-14 rounded-full' onClick={() => handleButtonClick('4')}>4</button>
            <button type="button" className='shadow-xl bg-slate-500 p-1 m-2 w-16 h-14 rounded-full' onClick={() => handleButtonClick('5')}>5</button>
            <button type="button" className='shadow-xl bg-slate-500 p-1 m-2 w-16 h-14 rounded-full' onClick={() => handleButtonClick('6')}>6</button>
            <button type="button" className='shadow-xl bg-slate-500 p-1 m-2 w-16 h-14 rounded-full' onClick={() => handleButtonClick('7')}>7</button>
            <button type="button" className='shadow-xl bg-slate-500 p-1 m-2 w-16 h-14 rounded-full' onClick={() => handleButtonClick('8')}>8</button>
            <button type="button" className='shadow-xl bg-slate-500 p-1 m-2 w-16 h-14 rounded-full' onClick={() => handleButtonClick('9')}>9</button>
            <button type="button" className='shadow-xl bg-slate-500 p-1 m-2 w-36 h-14 rounded-full' onClick={() => handleButtonClick('0')}>0</button>
          </div>
          <div className='font-semibold text-white p-2 flex-col'>
            <button type='button' className='shadow-xl bg-gray-950 p-1 m-2 w-16 h-14 rounded-full' onClick={() => handleButtonClick('+')}>+</button>
            <button type='button' className='shadow-xl bg-gray-950 p-1 m-2 w-16 h-14 rounded-full' onClick={() => handleButtonClick('-')}>-</button>
            <button type='button' className='shadow-xl bg-gray-950 p-1 m-2 w-16 h-14 rounded-full' onClick={() => handleButtonClick('*')}>*</button>
            <button type='button' className='shadow-xl bg-gray-950 p-1 m-2 w-16 h-14 rounded-full' onClick={() => handleButtonClick('/')}>/</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Calculator;
