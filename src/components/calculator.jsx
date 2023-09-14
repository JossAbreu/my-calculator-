import React, { useState } from 'react';

function Calculator() {
    const [input, setInput] = useState('');
    const [resultado, setResultado] = useState('');
  
    const handleInput = (event) => {
      const numericValue = event.target.value.replace(/\D/g, ''); // Filtrar solo números
      setInput(numericValue);
    };
  
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
    <div  className='bg-gray-900 items-center justify-center flex flex-1 flex-col max-h-screen h-screen'>
      <div data-aos="fade-down" data-aos-duration="2000" className=' flex flex-col items-center justify-center text-center gap-3 mb-9'>
        <h1 className=' text-red-600 text-3xl font-bold'>My first Calculator </h1>
        <h1 className=' text-white text-md  '>Frontend Developer - Josue abreu </h1>
      </div>
      <form data-aos="fade-up" data-aos-duration="2000" className='flex shadow-m flex-col bg-slate-300 w-96 h-96 rounded-xl'>
        <div className='font-bold flex-row flex p-4'>
          <input
            type="text"
            className='w-44 outline-none border-[3px] border-red-500 text-center text-red-600 mr-10 rounded-md bg-black '
            name="texte"
            value={input}
            onChange={handleInput}
          />
          <button type='button' className='bg-orange-500 w-28 h-10 rounded hover:scale-110 transition ease-in hover:bg-green-500' onClick={calcular}>Calcular</button>
        </div>
        <hr />
        <div className='flex flex-row'>
          <div className='text-white p-2 flex-col-reverse'>
            <button type="button" className='text-black shadow-xl bg-red-500 p-1 m-2 w-16 h-14 rounded-full' onClick={() => handleButtonClick('AC')}>AC</button>
            <button type="button" className='shadow-xl bg-slate-500 p-1 m-2 w-16 h-14 rounded-full hover:scale-110 transition ease-in hover:bg-blue-500 ' onClick={() => handleButtonClick('1')}>1</button>
            <button type="button" className='shadow-xl bg-slate-500 p-1 m-2 w-16 h-14 rounded-full hover:scale-110 transition ease-in hover:bg-yellow-500 ' onClick={() => handleButtonClick('2')}>2</button>
            <button type="button" className='shadow-xl bg-slate-500 p-1 m-2 w-16 h-14 rounded-full hover:scale-110 transition ease-in hover:bg-purple-500 ' onClick={() => handleButtonClick('3')}>3</button>
            <button type="button" className='shadow-xl bg-slate-500 p-1 m-2 w-16 h-14 rounded-full hover:scale-110 transition ease-in hover:bg-green-500 ' onClick={() => handleButtonClick('4')}>4</button>
            <button type="button" className='shadow-xl bg-slate-500 p-1 m-2 w-16 h-14 rounded-full hover:scale-110 transition ease-in hover:bg-blue-500 ' onClick={() => handleButtonClick('5')}>5</button>
            <button type="button" className='shadow-xl bg-slate-500 p-1 m-2 w-16 h-14 rounded-full hover:scale-110 transition ease-in hover:bg-orange-500 ' onClick={() => handleButtonClick('6')}>6</button>
            <button type="button" className='shadow-xl bg-slate-500 p-1 m-2 w-16 h-14 rounded-full hover:scale-110 transition ease-in hover:bg-blue-500 ' onClick={() => handleButtonClick('7')}>7</button>
            <button type="button" className='shadow-xl bg-slate-500 p-1 m-2 w-16 h-14 rounded-full hover:scale-110 transition ease-in hover:bg-pink-500 ' onClick={() => handleButtonClick('8')}>8</button>
            <button type="button" className='shadow-xl bg-slate-500 p-1 m-2 w-16 h-14 rounded-full hover:scale-110 transition ease-in hover:bg-blue-500 ' onClick={() => handleButtonClick('9')}>9</button>
            <button type="button" className='shadow-xl bg-slate-500 p-1 m-2 w-36 h-14 rounded-full hover:scale-110 transition ease-in hover:bg-yellow-500 ' onClick={() => handleButtonClick('0')}>0</button>
          </div>
          <div className='font-semibold text-white p-2 flex-col'>
            <button type='button' className='shadow-xl bg-gray-950 p-1 m-2 w-16 h-14 rounded-full hover:scale-110 transition ease-in hover:bg-red-500' onClick={() => handleButtonClick('+')}>+</button>
            <button type='button' className='shadow-xl bg-gray-950 p-1 m-2 w-16 h-14 rounded-full hover:scale-110 transition ease-in hover:bg-red-500' onClick={() => handleButtonClick('-')}>-</button>
            <button type='button' className='shadow-xl bg-gray-950 p-1 m-2 w-16 h-14 rounded-full hover:scale-110 transition ease-in hover:bg-red-500' onClick={() => handleButtonClick('*')}>*</button>
            <button type='button' className='shadow-xl bg-gray-950 p-1 m-2 w-16 h-14 rounded-full hover:scale-110 transition ease-in hover:bg-red-500' onClick={() => handleButtonClick('/')}>/</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Calculator;
