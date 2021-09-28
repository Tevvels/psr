import React, {useState,useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {searchBtnData} from '../../Data/searchBtnData';
import { Container,Row,Col,Card,Button } from 'react-bootstrap';
import stock_minion_many from "../../Data/photos/stock_minion_many.jpg";

import './style.css';

const axios = require("axios").default;
const Search = () => {

    const [formInput,setFormInput] = useState({});
    const {handleSubmit} = useForm();

    const [advSearch, setAdvSearch] = useState(false);
    const handleAdvSearch = () =>{
        setAdvSearch(prev => !prev);
    }
   

   const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormInput({...formInput, [name]: value})
    }
    
    const options = {
        method: 'GET',
        url: 'https://realty-mole-property-api.p.rapidapi.com/salePrice',
        params: {
                compCount: formInput.compCount,
                squareFootage: formInput.squareFootage,
                bathrooms: formInput.bathroom,
                bedrooms: formInput.bathroom,
                city: formInput.city,
                county: formInput.county,
                zipcode: formInput.zipcode,
                price: formInput.price,
                address: formInput.address,
                bedrooms: formInput.bedroom,
                propertyType: formInput.propertyType
        },
        headers: {
            'x-rapidapi-key': '87e3032294msh25d302b42bf0260p193f23jsn25a17a3279f8',
            'x-rapidapi-host': 'realty-mole-property-api.p.rapidapi.com'
          }
    }


    function handleFormSubmit(event, r){
    event.preventDefault();
    event.stopPropagation();        
      axios.request(options)

        .then(
            (response)=>{
                <div>
                    {document.querySelector('.my_listings').innerHTML = response.data.listings.map((item,index)=>(
                        JSON.stringify(
                        <div>
                            <h2>{item.address}</h2>
                            <h2>{item.city}</h2>
                            <h2>{item.state}</h2>
                            
                        </div>
                        
                        )
        ))}
                </div>
                console.log(response.data)
            },
            //  r.target.reset()
        ).catch((err)=> console.log(err));

    }
    
    return (
        <div>   
              <Card className=" text-white">
                   <Card.Img variant="top" src={stock_minion_many} />
                    <Card.ImgOverlay>
                        <Card.Title>
                            Sprague Real Estate
                        </Card.Title>
                        <Card.Text>
                            Selling homes since 1987
                        </Card.Text>
                    </Card.ImgOverlay>
                   <form onSubmit={handleSubmit(handleFormSubmit)}>
                 
                    <Row className={`col row`}>
                    <Button>Agent</Button>
                    <Button>Buy/Sell</Button>
                    <Button>Community</Button>


                            <input 
                            type={`text`}
                            name={`simpleSearch`}
                            className={`form-control ${advSearch ? "" : "simpleAdv"}`}
                            />
                        {searchBtnData.map((item,index)=> (
   
                            <input
                            key={index}
                            onChange={handleInputChange}
                            type={item.type}
                            placeholder={item.name}
                            className={`form-control ${advSearch ? "advanceSearch" : ""}`}
                            name={item.name}
                            />
                            
                          ))}
                                              <Button variant="outline-success" onClick={handleAdvSearch}>{advSearch ? `Advance Search` : `Simple Search`}</Button>
                        <Button

                        variant={`outline-warning`}
                        onClick={handleFormSubmit}
                        type={`submit`}
                        >Submit</Button>

                    </Row>


            </form>
            </Card>
       </div>
       
    )
}

export default Search
