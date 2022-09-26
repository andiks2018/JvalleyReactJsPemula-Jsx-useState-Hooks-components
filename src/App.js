import React, { useState } from 'react';
import './style.css';

// React component = sebuah function /class yang mereturn jsx
// 1.  Namanya harus dimulai huruf capital
// 2. Hanya bisa meretrun sebuah parent element
// 3. bisa memiliki state dan props
// 4. bisa dipanggil di component lain  dengan cara <NAmaComponent />
// 5. Elemnt hampa <></>

//FUNGSIONAL COMPONENT, yang kita gunakan fungsional component
export default function App() {
  const [count, setCount] = useState(1);
  const[text, setText]= useState("Ini default Textnya");
  const[fontSize, setFontSize]=useState(16)
  const [color, setColor]= useState('black')

  return (
    <>
      <div className="container"> 
        <h1>Jumlah : {count} </h1>
        <button
          onClick={() => { //onClick eventlistener
            setCount(count + 1);
          }}
        >
          tambah
        </button>
        <button onClick={()=>{
          if(count>=1){ //membatasi klik tidak boleh minus
            setCount(count-1)
          }
        }}>kurang</button>


        <h3 style={{//{}ini tandanya objek
          fontSize: fontSize+'px',
          color:color, //ada color disini
        }}>{text}</h3>

        <input type="text" placeholder="masukkan text" 
        onChange={(e)=>{
          setText(e.target.value);
        }} />

        <div>
          <input type="range" min={1} max={100}
          onChange={(e)=>{
            setFontSize(e.target.value)
          }} />
        </div>

        <div>
          <input type="color" 
          onChange={(e)=>{
            setColor(e.target.value);
          }}
          />
        </div>

      </div>
    </>
  );
}

//KELAS COMPONENT TIDAK DI PAKAI RIBET
// class App extends React.Component{
//   render(){
//     return (
//       <div>Hello class component</div>
//     )
//   }
// }
// export default App;