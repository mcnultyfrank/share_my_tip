import styles from "./Home.module.scss";
import React, {useState, useEffect} from 'react'
import 'semantic-ui-css/semantic.min.css'

import { Button, 
  Progress,
  Form,
  Grid,
  Segment,
  TransitionablePortal, 
  Header, 
  Image, 
  Modal,
  Divider,
  Input,
  Item,
  Label,
  Container,
  Message,
Popup,
Icon} from 'semantic-ui-react'

  


const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [percentage, setPercentage] = useState(10);
  const [amount, setAmount] = useState(0);
  const [people, setPeople] = useState(0);
  const [showBill, setShowBill] = useState(0);
  let number = Array.from(Array(20).keys())
  useEffect(() => {
    setPeople()
    console.log(people);
    
  }, [])
  useEffect(() => {
    setAmount()
    console.log(amount);
  }, [])
  useEffect(() => {
    setShowBill()
    console.log(showBill);
  }, [])




  const increasePercentageTip = () => {
    setPercentage(count => count + 1);
  }
  const decreasePercentageTip = () => {
    if (percentage !== 0)
    setPercentage(count => count - 1);
  }
  
  
 

  const caculateBill = (bill, tip) => {
      const numberOfPeople = parseInt(people.target.value)

      const billAndTipTotal =  parseInt(amount.target.value) + parseInt(amount.target.value) * percentage/100;
      return setShowBill(billAndTipTotal / parseInt(people.target.value).toFixed(2))

      // console.log(billAndTipTotal / parseInt(people.target.value));
    }

    
      // return billAndTipTotal / parseInt(people.target.value)
  

  
  // const increasePeople = () => {
  //   setPeople(count => count + 1);
  // }
  // const decreasePeople = () => {
  //   if (people !== 0)
  //   setPeople(count => count - 1);
  // }

  
  


  return (
    <div className = {styles.homeContainer}>
      {/* <Modal */}
      {/* // onClose={() => setOpenModal(false)}
      // onOpen={() => setOpenModal(true)}
      // className = {styles.modal}
      // size = {'large'}
      // trigger={<Button>Show Modal</Button>}>
      //   <Modal.Header>Bill and Tip Calculator</Modal.Header> */}
      <Container  textAlign='left' className = {styles.container} >
        <Segment placeholder>
              <Grid.Column stretched='true' stackable = 'false'>
              {/* <Input labelPosition='right' type='text' placeholder='Amount' >
              <Label basic>£</Label>
              <input />
              <Label></Label>
              </Input> */}
                
              <Input type='number' placeholder='Number of people...'  onChange= {setPeople}/>
              <datalist id='Number'>
                {number.map((item) => {
                  return <option value={item}>{Item}</option>
                })}
              </datalist>
        
              <Divider></Divider>
              <Input labelPosition='right' type='number' placeholder='Amount' onChange= {setAmount}>
              <Label basic>£</Label>
              <input />
              <Label></Label>
              </Input>
              <Divider></Divider>
              <Button.Group>
              <Button onClick = {decreasePercentageTip} >Decrease Tip</Button>
              <Button.Or />
              <Button onClick = {increasePercentageTip} positive>Increase Tip</Button>
              </Button.Group>
              <Divider></Divider>
            
                <Progress size = {'large'}  progress = {`value${'%'}`} className={styles.progressBar} percent={percentage} indicating />
              </Grid.Column>
              <Divider></Divider>

              <Grid.Column>
              <Header  as='h3'>Calculate Bill and Tip</Header>
              <Button.Group  size='huge'>
              <Button disabled={people === undefined || amount === undefined ? true : false} color = 'instagram' onClick={() => caculateBill()} >Calculate</Button>
              {/* <Button.Or />
              <Button color='black' >Custom</Button> */}
              </Button.Group>
              <Message >{`£${showBill == undefined ? 0 : showBill}`}</Message>

              </Grid.Column>
          </Segment>
          </Container>

    {/* </Modal> */}







      <div>
      {/* <Button onClick={increasePercentageTip}>Increment</Button>
      <Progress progress = {`value${'%'}`} className={styles.progressBar} percent={percentage} indicating /> */}
      {/* <Progress className= {styles.progressBar} color = {'green'} active={true} size = {'medium'} /> */}
      </div>


    </div>
  );
};



export default Home;
