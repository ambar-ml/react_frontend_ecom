import {Container,Form,Button,Col,Row} from 'react-bootstrap';
import {useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom'
import Nav from './Nav'
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab'



function Order(){
    const[isLoggedIn,updateLoggedIn]=useState(false)
    const history=useHistory()
    const[open,setopen]=useState(false)
    const[firstName,upFirstName]=useState('')
    const[lastName,upLastName]=useState('')
    const[address,upAddress]=useState('')
    const[city,upCity]=useState('')
    const[state,upState]=useState('')
    const[phone,upPhone]=useState('')
    const[msg,upMsg]=useState()
    const[sever,upSever]=useState()

    useEffect(()=>{
        let user=localStorage.getItem('user')
        if(!user){
            history.push('/login')
        }
        
    })
    const login=()=>{
        history.push('/login')
    }

    const handleClose=()=>{
        setopen(false)
      }

    const buttonHandler=()=>{
        if(firstName.length>0 && lastName.length>0 && address.length>0 && city.length>0 && state.length>0 && phone.length>0){
            setopen(true)
            upMsg('order Successful')
            upSever('success')
        }
        else{
            setopen(true)
            upMsg('Fill all the fields')
            upSever("warning")
        }

    }

    return(
        <div>
            <Nav/>
            <h5>{isLoggedIn}</h5>
            <div className="container ">
                <Form className="my-5">
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="First Name" onChange={(e)=>upFirstName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Last Name" onChange={(e)=>upLastName(e.target.value)}/>
                    </Form.Group>
                    
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeHolder="Address" type="address" onChange={(e)=>upAddress(e.target.value)}></Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>City</Form.Label>
                        <Form.Control placeholder="City" onChange={(e)=>upCity(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>State</Form.Label>
                        <Form.Control placeholder="State" onChange={(e)=>upState(e.target.value)}/>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Phone Number</Form.Label >
                        <Form.Control placeHolder="Phone Number" type="Phone" onChange={(e)=>upPhone(e.target.value)}></Form.Control>
                    </Form.Group>
                </Form.Row>
                
                <div className="text-center">
                <Button onClick={buttonHandler}>Place</Button>
                </div>
            
                    

                </Form>
                
                <div className="container">
<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
  <Alert onClose={handleClose} severity={sever}>
    {msg}
  </Alert>
</Snackbar>
</div>


            </div>
            
        </div>
    )
}


export default Order;