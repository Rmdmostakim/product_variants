import {useState } from "react";
import Fields from "./Fields";

function App() {
  const array =   {
    1:{ attributes:'',value:'',price:'',stock:0,image:'' },
    2:{ attributes:'',value:'',price:'',stock:0,image:'' },
  }
  //  const totalVariants = variants ? Object.values(variants) : [];
  // {totalVariants.length>0 && totalVariants.map((variant)=>{
  //   console.log(variant);
  //   return  <Fields variant={variant[index]} variantHandler={variantHandler}/>
  // })}
  //setIndex(pre=>[...pre,null]);
  // const rows =() =>{
  //   return index?.length >0 && index.map((data,index)=>{
    
  //     return (
  //       <div key={Math.random()} >
  //         <Fields variants={null} variantHandler={variantHandler}/>
  //       </div>
  //     );
  //   });
  // };
  // console.log(Object.keys(variants));

  const [show,setShow] = useState(false);
  const [row,setRow] = useState([]);
  const showEnable = () =>{
    setShow(true);
    const length = row.length;
    setRow(pre=>[...pre,length]);
  }
  const showDisable = () => setShow(false);
  const [variants,setVariants] = useState(null);
  const initialValue = {attributes:'',value:'',price:0,stock:0,image:''};
  const variantHandler = (row,attributes) =>{
    // if(variants){
    //     const keys = Object.keys(variants);
    //     if(keys.includes(attributes)){
    //       variants[attributes].push(initialValue);
    //     }else{
    //       setVariants({...variants,[attributes]:[initialValue]});
    //     }
    // }else{
    //   setVariants({...variants,[attributes]:[initialValue]});
    // }
    setVariants({...variants,[row]:{attributes:attributes,value:'',price:0,stock:0,image:''}});
  }
  const removeHandler = (rowIndex) =>{
      setRow(row.filter((index)=>index !== rowIndex));
      delete variants?.[rowIndex];
      setVariants(variants);
  }
  console.log(variants)
  return (
    <>
      <h4>Variants</h4>
      <button onClick={showEnable}>Add Option</button>
      {show && <Fields row={row} disable={showDisable} remove={removeHandler} variants={variants} variantHandler={variantHandler}/>}
      
    </>
  );
}

export default App;
