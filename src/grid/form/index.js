import React, {useState} from 'react'

const Form = ({handleSubmit}) => {
    const [inputs, setInputs] = useState({
        gridSize: 25,
        interval: 700
    })

    const handleChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: Number(e.target.value)
        })
        console.log(e.target.value)
    }

    return(
        <form onSubmit={e => handleSubmit(e, inputs)}>
            {/* <input type='number' name='gridSize' onChange={handleChange} value={inputs.gridSize}></input> */}
            <select name='gridSize' onChange={handleChange}>
                <option value='25'>25x25</option>
                <option value='35'>35x35</option>
                <option value='40'>40x40</option>
                <option value='50'>50x50</option>
            </select>
            <input type='number' name='interval' onChange={handleChange} value={inputs.interval}></input>
            <input type='submit'/>
        </form>
    )
}

export default Form