import React, { useEffect, useRef, useState } from 'react'

export default function Fields({variantHandler,variants,row,remove}) {
    const rowRef = useRef();

    const variantSelector = (row,event) =>{
        const {value} = event.target;
        if(value === 'color'){
            rowRef.current.childNodes[row].childNodes[1].type="color"
        }else{
            rowRef.current.childNodes[row].childNodes[1].type="text"
        }
        rowRef.current.childNodes[row].childNodes[0].disabled= true;
        variantHandler(row,value);
      }
    const inputHandler = (event)=>{
        const {name,value} = event.target;
        // console.log(ref.current.childNodes[0]);
        // console.log(value);
    } 
    const view = () =>{
        return row.map((index)=>{
            if(variants?.[index]){
                return (
                    <div>
                        <select value={variants[index].attributes} disabled onChange={(event)=>variantSelector(index,event)}>
                            <option>Select Variant</option>
                            <option value="color">Color</option>
                            <option value="size">Size</option>
                        </select>
                        <input type={variants[index].attributes === 'color' ? 'color' : 'text'} name="value" onChange={inputHandler} />
                        <input type="text" name="price" onChange={inputHandler} />
                        <input type="text" name="stock" onChange={inputHandler} />
                        <button onClick={()=>remove(index)}>Remove</button>
                    </div>
                );
            }
            return(
                <div key={Math.random()}>
                    <select onChange={(event)=>variantSelector(index,event)}>
                        <option>Select Variant</option>
                        <option value="color">Color</option>
                        <option value="size">Size</option>
                    </select>
                    <input type="text" name="value" onChange={inputHandler} />
                    <input type="text" name="price" onChange={inputHandler} />
                    <input type="text" name="stock" onChange={inputHandler} />
                    <button onClick={()=>remove(index)}>Remove</button>
                </div>
            )
        });
    }
    return (
      <>     
        <div ref={rowRef}>
            {view()}
        </div>
      </>
    );
}
