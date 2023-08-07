import {useState} from 'react';
function S(){
    const [ value,setValue]=useState([1,2]);
    const some=((x)=>{
        if(x==='add'){
            var n=value[value.length-1]+1;
            var arr=[...value,n]
            setValue(arr)
        }else if(x==='remove'){
            if(value.length>2){
                var n=value.slice(0,value.length-1);
                //var arr=[value]
                setValue(n)
            }
        }
    })
    // const some=((o)=>{
    //    if(o==='in'){
    //     setValue(value+1)
    //    }else if(o==='dic'){
    //     setValue(value-1)
    //    }
    // })
    // const m=(()=>{
    //     setValue(value-1)
    // })
    return(
        <div>
            <button onClick={()=>{some('add')}}>add</button>
            <button onClick={()=>{some('remove')}}>remove</button>
            <h2>{value.map((value)=>{
                return <p>{value}</p>
            })}</h2>
            { 
            /* <button  onClick={()=>some('in')}>increse</button>
            <button  onClick={()=>some('dic')}>decrese</button> */}
        </div>
    )
}
export default S;