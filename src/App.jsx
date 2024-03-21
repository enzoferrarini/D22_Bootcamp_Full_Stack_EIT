  import Text from './components/Text';
  import './styles/App.css';
  import Button from './components/Button';
  import Input from './components/Input';
  import {useState} from 'react';

  function App() {

    //State for name
    const [name, setName] = useState('');
    //State for age
    const [age, setAge] = useState(0);
    //State to show Name required
    const [msgErrorName, setMsgErrorName] = useState('');
    //State to show Name required
    const [msgErrorAge, setErrorAge] = useState('');
    //State to show Msg
    const [welcomeMessage, setWelcomeMessage] = useState('');
      
    const validForm = () => {
      let valid=true;
      setName(name.trim());
      if(name.length===0 )
      {
        valid=false;
        setMsgErrorName('Campo Obligatorio');
      }
      else
        setMsgErrorName('');

      if(age.toString().length===0 || parseInt(age)<=0)
      {
        valid=false;
        setErrorAge('Campo Obligatorio y mayor que 0');
      }
      else
        setErrorAge('');

      if(valid)
        if(age>=18)
          setWelcomeMessage(`Bienvenido <strong>${name}</strong>, gracias por usar nuestra aplicación`);
        else
          setWelcomeMessage(`Hola <strong>${name}</strong>, eres muy joven para usar esta aplicación`);
      else 
          setWelcomeMessage('');      
    };

    return (
      <div className="App">       
        <div className="form__container">  
          <Text renderAs="h1" content="Ingrese los Siguientes Datos"/>
          <div className="flex__container p__LeftRight--3">
            <Text renderAs="p" content="Nombre" />           
            <Input 
              type={"text"} 
              placeholder={"Ingrese Nombre"} 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Text renderAs="p" content={msgErrorName} componentsProps={{className:"erroMessage"}}/>
            <Text renderAs="p" content="Edad" />
            <Input 
              type={"number"} 
              minValue="1" 
              placeholder={"Ingrese Edad"}
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <Text renderAs="p" content={msgErrorAge} componentsProps={{className:"erroMessage"}}/>
          </div>
        
          <Button label="Mostrar Mensaje" onClick={validForm}/>
          <Text renderAs="span" content={welcomeMessage} 
            componentsProps={{id:"idMsg", style: { display: welcomeMessage ? 'block' : 'none' }}}
            />
          
        </div>
      </div>
    );
  }

  export default App;
