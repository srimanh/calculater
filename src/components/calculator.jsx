import React,{useReducer} from "react";
import Display from "./display"

function Calculator(){
    const initstate={
        inputs:""
    }
    const reducer =(state,action)=>{
        switch(action.type){
            case "ADD_INPUT":
                return{inputs:state.inputs+action.value};
            case "FIND_RESULT":
                try{
                    return{inputs:eval(state.inputs)}
                } catch(error){
                    return{inputs:"Invalid Expression"}
                }
            case "CLEAR":
                return{inputs:""}
        }
    };
    const [state,dispatch]=useReducer(reducer,initstate);

    const handleInput =(value)=>{
        dispatch({type:"ADD_INPUT",value:value});

    };

    const handleEqual=()=>{
        dispatch({type:"FIND_RESULT"})
    };
    const handleClear =()=>{
        dispatch({type:"CLEAR"});
    };

    return(
        <div id="whole-div">
      
        <Display valuesInput={state.inputs} />
        <div id="btn-box">
  
        <button onClick={() => handleInput("1")}>1</button>
        <button onClick={() => handleInput("2")}>2</button>
        <button onClick={() => handleInput("3")}>3</button>
        <button onClick={() => handleInput("+")}>+</button>
        <br />
        <button onClick={() => handleInput("4")}>4</button>
        <button onClick={() => handleInput("5")}>5</button>
        <button onClick={() => handleInput("6")}>6</button>
        <button onClick={() => handleInput("-")}>-</button>
        <br />
        <button onClick={() => handleInput("7")}>7</button>
        <button onClick={() => handleInput("8")}>8</button>
        <button onClick={() => handleInput("9")}>9</button>
        <button onClick={() => handleInput("*")}>*</button>
        <br />
        <button onClick={() => handleClear()}>C</button>
        <button onClick={() => handleInput("0")}>0</button>
        <button onClick={() => handleEqual()}>=</button>
        <button onClick={() => handleInput("/")}>/</button>
        </div>
      </div>
    )
}
export default Calculator