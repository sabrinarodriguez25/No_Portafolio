import React,{useState,useEffect} from "react";

const Var1 = ({ key, key2})=> {


    const [variable, setVariable] = useState(false)
    const [variable2,setVariable2] = useState(false)



    useEffect(() => {
        console.log(variable)
    
    }, [variable, variable2])

    const handleChange = () => {
        setVariable(!variable)
    }


    return(
        <div id={key}>
            <span id={key2}>

            </span>

            <button  onClick={handleChange}>Actualizar</button>


        </div>
    )





}
 export default Var1