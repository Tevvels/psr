import React, {useState,useEffect} from 'react';
import {useForm} from 'react-hook-form';
import api from "../../utils/API"
const Search = () => {
    const [formInput,setFormInput] = useState({});
    const {handleSubmit} = useForm();


   const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormInput({...formInput, [name]: value})
    }
    


    function handleFormSubmit(r){
        
        api.searchHouse({
            compCount: formInput.compCount,
            squareFootage: formInput.squareFootage,
            bathroom: formInput.bathroom,
            address: formInput.address,
            bedroom: formInput.bedroom,
            propertyType: formInput.propertyType
        })
        .then(
             r.target.reset()
        ).catch((err)=> console.log(err));

    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className={`row`}>
                    <div className={`col`}>
                        <input
                        onChange={handleInputChange}
                        type={`int`}
                        className={`form-control`}
                        placeholder={`1`}
                        name={`compCount`}
                        />
                        <input
                        onChange={handleInputChange}
                        type={`int`}
                        className={`form-control`}
                        placeholder={`1`}
                        name={`squareFootage`}
                        />
                        <input
                        onChange={handleInputChange}
                        type={`int`}
                        className={`form-control`}
                        placeholder={`1`}
                        name={`bathroom`}
                        />
                        <input
                        onChange={handleInputChange}
                        type={`text`}
                        className={`form-control`}
                        placeholder={`123 main street`}
                        name={`address`}
                        />
                        <input
                        onChange={handleInputChange}
                        type={`text`}
                        className={`form-control`}
                        placeholder={`single family`}
                        name={`propertyType`}
                        />
                        <button
                        className={`btn btn-submit`}
                        onClick={handleFormSubmit}
                        type={`submit`}
                        >
                        Look up House?
                        </button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Search
