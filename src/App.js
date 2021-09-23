import react, { useState } from "react"


function App(){
 
  var [inputText , setInputText] = useState('');
  var [nic , setNic] = useState('');
  const [numcre , setNumcre]=useState([])
  const [name , setName] = useState('')

  const creditCard =()=>{
    setNumcre([...numcre,{creditNumber:inputText}])
    setInputText('')
    
  }

const card = {
  backgroundColor :'#b5880d',
  width:'30%',
  height:'250px',
  color:'#212121',
  borderRadius:'20px',
  margin:"10px",
  justifyContent:'space-between',
  fontSize:'20px',
  backgroundImage:'url(https://wi.wallpapertip.com/wsimgs/79-791293_red-white-wallpapers-white-and-red-background-4k.jpg)',
  backgroundRepeat:'no-repeat',
  backgroundPosition:'center',
}

const visa = {
  marginRight:'15px'
}

const creditInput={
  width:'30%',
  height:'20px',
 
  fontSize:'20px',
  padding:'5px',
  textAlign:'center',
  margin:'20px'
}

return(
<>
<div style={{textAlign:'center',fontFamily:'monospace'}}>
<h1>CREDIT CARD GENERATOR BANK-AL MOHSIN</h1>
<label style={{fontSize:'25px',fontFamily:'serif',color:'gray'}}> Credit Number :  </label>
<input required style={creditInput} value={inputText} maxLength="19" type="text" onChange={(e)=>{
 var value1 = e.target.value
setInputText(value1);
var value1=value1+' '
if(value1.length % 5 == 0){
  setInputText(value1);
}

}} />

<br/>

<label style={{fontSize:'25px',fontFamily:'serif',color:'gray'}}> Customer Name :  </label>
<input required style={creditInput} value={name} maxLength="19" type="text" onChange={(e)=>{
 setName(e.target.value)
}} />
<br/>
<button onClick={creditCard}>SEND</button>
</div>

  <hr width='80%' />
<div style={{display:"flex",flexDirection:'row',flexWrap:'wrap',margin:'5px'}}>
{
  numcre.map((v,i)=>{
    return (
      <div style={card}>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center' ,width:'90%',height:'70px',margin:'0 auto'}}>
          <img src='https://mohsiitech.web.app/static/media/mohsin.94973065.png' width='70px' height='70px'/>
          <h2>Bank Al-Mohsin</h2>
        </div>
        
        <div style={{marginLeft:'30px',color:'#ffff',fontFamily:'monospace',fontSize:'30px',fontWeight:'bold'}}>
        <img style={{marginLeft:'10px'}} src='https://pngimage.net/wp-content/uploads/2018/05/chip-cart%C3%A3o-png-1.png' width='50px' height='40px'/>
        <p style={{marginTop:'-1px'}}  key={i}> {v.creditNumber}</p>
        </div>

       <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',color:'#ffff'}}>
       <h4 style={{marginLeft:'30px',fontSize:'22px', fontFamily:'monospace'}} >{name}</h4>
       <img src='https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo-2006-2014.png' style={visa} width='80x' height='60px'/>
       </div>
      </div>
    )
  })
}
</div>

<h1>NIC : {nic}</h1>
<input value={nic} maxLength="15" type="text" onChange={(e)=>{
 var numberNic = e.target.value
 setNic(numberNic)
  if(numberNic.length == 5){
    setNic(numberNic+'-')
  }
  else if(numberNic.length==13){
    setNic(numberNic+'-')
  }
}} />




</>
)
}

export default App