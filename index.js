import React from 'react'
import  ReactDOM  from 'react-dom'


let curDate = new Date();
curDate = curDate.getHours();
let greeting = ''; //dynamic value change 

const h11={
textAlign : 'center',

justifyContent:'center'

}
const cssStyle ={ 
  
}
if(curDate >=1 && curDate < 12 ){

   greeting ='Good Morning';
   cssStyle.color='green'


}else if(curDate>=12 && curDate <19){
    greeting ='Good Afternoon';
    cssStyle.color='orange'
}
else{
    greeting ='Good Night'
    cssStyle.color='red'
}


ReactDOM.render(

    <h1 style={h11}>Hello Sir ,<span style={cssStyle}>{greeting}</span> </h1>,
    document.getElementById('root')

)