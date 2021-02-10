import styles from "./Home.module.scss";
import React, {useState, useEffect} from 'react'
import 'semantic-ui-css/semantic.min.css'
import firebase, {provider} from "../../firebase"
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
  const [defaultCurrency, setDefaultCurrency] = useState('£')
  const [amount, setAmount] = useState(0);
  const [people, setPeople] = useState(0);
  const [showBill, setShowBill] = useState(0);
  const [user, setUser] = useState(null);
  const [billType, setBillType] = useState('Each')
  let number = Array.from(Array(20).keys())
  const increasePercentageTip = () => {
    setPercentage(count => count + 1);
  }
  const decreasePercentageTip = () => {
    if (percentage !== 0)
    setPercentage(count => count - 1);
  }
  const reset = () => {
    setAmount(0)
    setPeople(0)
    setPercentage(5)
  }

  const caculateBill = (bill, tip) => {
      const numberOfPeople = parseInt(people.target.value)
      const billAndTipTotal =  parseInt(amount.target.value) + parseInt(amount.target.value) * percentage/100;
      return setShowBill(billAndTipTotal / numberOfPeople)
    }
    const caculateEntireBill = (bill, tip) => {
      const billAndTipTotal =  parseInt(amount.target.value) + parseInt(amount.target.value) * percentage/100;
      return setShowBill(billAndTipTotal)
    }
    

    const signIn = () => {
      firebase.auth().signInWithRedirect(provider);
    }
    const signOut = () => {
      firebase.auth().signOut();
    }
    const getUser = () => {
      firebase.auth().onAuthStateChanged((user) => {
        if(user){
          setUser(user);
        } else {
          setUser(null)
        }
      })
    }

    useEffect(() => {
      setPeople()      
    }, [])
    useEffect(() => {
      setAmount()
    }, [])
    useEffect(() => {
      setShowBill()
    }, [])
    useEffect(() => {
      setDefaultCurrency('£');
    }, [])
    useEffect(() => {
      getUser();
    }, [])
    useEffect(() => {
    firstNameOnly();
    }, [user])
    const firstNameOnly = () => {
      if(user){
        for (let i = 0; i < user.displayName.split("").length; i++) {
          if(user.displayName.split("")[i] === ' ' )
          return
          else                   
          firstName.push(user.displayName.split("")[i]);
          console.log(firstName.join(""));
        }
      }
      else{
        return null
      }
    }
    const firstName = [];
    


    
  return (
    <div className = {styles.homeContainer}>
      <Container  textAlign='left' className = {styles.container} >
      <Segment size='small' clearing>
          <Popup position='top center' content={user ? 'Sign Out' : 'Sign In'}trigger={ <Button onClick= {user ? () => signOut() : () => signIn()} floated='right' icon>
          {user ? <Icon name='sign out' /> : <Icon name='sign in' />} 
          </Button>} />
          <Header  as='h2' textAlign='center' color='green' size='small' floated='left'>
            Share My Tip.com
          </Header>
          <Header  as='h2' textAlign='center' color='green' floated='right'>
            {user ? `Hi ${user.displayName}` : ``}
          </Header>
        </Segment>
        <Segment placeholder>
              <Grid.Column stretched='true' stackable = 'false'>
              {/* <Label error={amount === undefined ? true : false} basic size='medium'>People</Label> */}
              <Input icon='group' size='large' type='number' placeholder='Number of people...' value = {people === 0 ? 'reset' : null} error={people === undefined || people === 0 ? true : false} onInput= {setPeople}/>
              <datalist id='Number'>
                {number.map((item) => {
                  return <option value={item}>{Item}</option>
                })}
              </datalist>
              <Divider></Divider> 
              {/* <Label error={amount === undefined ? true : false} basic size='huge'>{defaultCurrency}</Label> */}
              <Input icon='money' size='large' type='number' placeholder='Total bill amount...' value = {amount === 0 ? 'reset' : null} error={amount === undefined || amount === 0 ? true : false} onChange= {setAmount}/>

              {/* <Input size='large' labelPosition='right' type='number' placeholder='Total bill amount...' error={amount === undefined ? true : false} onChange= {setAmount}/> */}
              {/* <Input  size='large' labelPosition='right' type='number' placeholder='Total bill amount...' error={amount === undefined ? true : false} onChange= {setAmount}> */}
              {/* <input /> */}
              {/* </Input> */}
              <Divider></Divider>
              <Button.Group>
              <Button onClick = {decreasePercentageTip} color='google plus'>Decrease Tip</Button>
              {/* <Button.Or /> */}
              <Button onClick = {increasePercentageTip} positive>Increase Tip</Button>
              </Button.Group>
              <Divider></Divider>            
                <Progress size = {'large'} font progress = {`value${'%'}`} className={styles.progressBar} percent={percentage} indicating />
              </Grid.Column>
              <Divider></Divider>
              <Grid.Column>
                <Button.Group  size='huge'>
            
                <Button disabled={people === undefined || amount === undefined || people === 0 || amount === 0 ? true : false} color = 'green' onClick={() => caculateBill()} >Split Bill</Button>
                <Button onClick={() => reset()} compact color='google plus'>Clear</Button>
                    <Modal
                    size = 'tiny'
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button><Icon name = 'setting'></Icon></Button>}
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
              </Button.Group>
              <Message >{`${showBill === undefined || showBill === Infinity || showBill === NaN || amount === 0 || amount === undefined? 0 : defaultCurrency + showBill.toFixed(2) + ' ' + billType}`}</Message>
            </Grid.Column>
          </Segment>
          </Container>
    </div>
  );
};



export default Home;
