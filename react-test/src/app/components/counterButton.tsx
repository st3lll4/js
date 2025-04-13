"use client";
import { useState, useEffect } from "react";


interface ICounterProps {
    label: string
    separator?: string
}


export default function CounterButton({ label = '', separator = '!'}: ICounterProps) {

    const [count, setCount] = useState(-2) // wtffffffff

    // calls function when component renders 
    useEffect(() => { 
        document.title = `You clicked ${count} times`;

        //cleanup - will be called when component unmounts
        return () => { 
            // alert('bye!') tegelt componendi muutudes ikka tuleb
        }

    }, [count]); // when value, calls function when it changes. when empty, will be called once. when no arrray, will be called every time.


    return (
      <button onClick={() => {setCount(count + 1)}}
        style={{
          margin: 100,
          }} className="btn btn-light">

        {label}{separator} {count}

      </button>
    );
  }