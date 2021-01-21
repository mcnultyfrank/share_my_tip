import styles from "./Home.module.scss";
import React, {useState, useEffect} from 'react'
import 'semantic-ui-css/semantic.min.css'
// import firebase, {provider} from "../../firebase"

import { Button, 
  Progress,
  Form,
  Grid,
  Segment,
  Header, 
  Modal,
  Divider,
  Input,
  Item,
  Label,
  Container,
  Message,
Icon,
Checkbox,
Dropdown,
Popup,
GridRow
} from 'semantic-ui-react'

const Home = () => {
  const [open, setOpen] = useState(false);
  const [percentage, setPercentage] = useState(5);
  const [amount, setAmount] = useState(0);
  const [people, setPeople] = useState(0);
  const [showBill, setShowBill] = useState(0);
  const [defaultCurrency, setDefaultCurrency] = useState('£')
  const [user, setUser] = useState(false);
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
  useEffect(() => {
    setDefaultCurrency('£');
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
    }
    const caculateEntireBill = (bill, tip) => {
      const numberOfPeople = parseInt(people.target.value)
      const billAndTipTotal =  parseInt(amount.target.value) + parseInt(amount.target.value) * percentage/100;
      return setShowBill(billAndTipTotal.toFixed(2))
    }


  
  


  return (
    <div className = {styles.homeContainer}>
       
      <Container  textAlign='left' className = {styles.container} >
      <Segment size='small' clearing>
        <Button disabled floated='right' icon>
          <Icon name='sign in' />
        </Button>
          <Header  as='h2' textAlign='center' color='green' floated='left'>
            Share My Tip
          </Header>
        </Segment>
        <Segment placeholder>
              <Grid.Column stretched='true' stackable = 'false'>
              <Input size='large' type='number' placeholder='Number of people...'  onChange= {setPeople}/>
              
              <datalist id='Number'>
                {number.map((item) => {
                  return <option value={item}>{Item}</option>
                })}
              </datalist>
              <Divider></Divider>
              <Input  size='large' labelPosition='right' type='number' placeholder='Total bill amount...' onChange= {setAmount}>
              <Label basic>{defaultCurrency}</Label>
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
            
                <Progress size = {'large'} font progress = {`value${'%'}`} className={styles.progressBar} percent={percentage} indicating />
              </Grid.Column>
              <Divider></Divider>


              <Grid.Column>
              {/* <Grid centered padded columns={2}>
                <Grid.Column textAlign='left'>
                <Header  as='h4'>Calculate Bill and Tip </Header>
                </Grid.Column>
                <Grid.Column relaxed textAlign='right'>
                <Popup size='tiny' position='top left' on='focus' flowing content='Output =  individual total bill and tip' trigger={<Button compact size='tiny' icon='question' />} />
                </Grid.Column>
              </Grid>
               */}
            
   


                <Button.Group  size='huge'>
                <Button disabled={people === undefined || amount === undefined || people === 0 || amount === 0 ? true : false} color = 'instagram' onClick={() => caculateBill()} >Calculate</Button>
                    <Modal
                    size = 'tiny'
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button><Icon name = 'setting'></Icon> Settings</Button>}
                    >
                    <Modal.Header>Settings</Modal.Header>
                    <Modal.Content>
                      <Modal.Description>
                      <Dropdown
                          text='Currency'
                          icon='money'
                          floating
                          labeled
                          button
                          className='icon'
                        >
                          <Dropdown.Menu>
                            <Dropdown.Header icon='tags' content='Choose Currency' />
                            <Dropdown.Divider />
                            <Dropdown.Item onClick  = {() => setDefaultCurrency('£')}
                              label='£'
                              text='Sterling'
                            />
                            <Dropdown.Item onClick  = {() => setDefaultCurrency('€')}
                              label='€'
                              text='Euro'
                            />
                            <Dropdown.Item onClick  = {() => setDefaultCurrency('$')}
                              label='$'
                              text='Dollar'
                            />
                          </Dropdown.Menu>
                        </Dropdown>
                      </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button
                        content="Confirm"
                        labelPosition='right'
                        icon='checkmark'
                        onClick={() => setOpen(false)}
                        positive
                      />
                    </Modal.Actions>
                  </Modal>
                  {/* <Popup size='tiny' position='top left' on='focus' flowing content='Output =  individual total bill and tip' trigger={<Button color='green' compact size='tiny' icon='question'/>} /> */}

              </Button.Group>
              <Message >{`${showBill == undefined ? 0 : showBill}`}</Message>
            </Grid.Column>
          </Segment>
          </Container>
    </div>
  );
};



export default Home;
