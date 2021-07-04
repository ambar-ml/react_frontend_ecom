import React, { useState, useEffect, createRef } from 'react';
import axios from 'axios';
import Products from './Prods'
import {Link } from 'react-router-dom'

import { Carousel, Card, Button ,Container,CardColumns} from 'react-bootstrap'
import Nav from './Nav'

function Shop() {
    

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://django-rest-backend-ecom.herokuapp.com/prodapi/').then(res => {
            
            setData(res.data)
            
        })
            .catch(err => {
                console.log(err)

            })

    }, [])


    return (


           <div>
                <Nav/>

               <Container>
                   <CardColumns className="my-5 ">






                {data.map((data, index) => {
                    return (

                           
                        

                            <Card key={index} style={{width:'18rem'}} border={'dark'} className="text-center h-100"   >
                                <Card.Img variant="top" src={data.image} />
                                <Card.Body >
                                    <Card.Title>{data.prod_name} RS-{data.price}</Card.Title>
                                    <Card.Text>
                                        {data.desc}
                                    </Card.Text>
                                  <Link to={`/shop/${data.id}`}>  <Button variant="dark">View/Buy Product</Button></Link>
                                </Card.Body>
                            </Card>

                        



                    )
                })}
                 </CardColumns>
                 </Container>





        
        </div>




    )

}

export default Shop;
