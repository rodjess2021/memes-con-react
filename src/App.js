import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value)
  }
  
  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value)
  }

  const onChangeImagen = function (evento) {
    setImagen(evento.target.value)
  }

  const onClickExportar = function (evento) {
    alert("EXPORTAR")
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img    = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img
      link.click();
  });
  }

  return (
    <div className="App">
      <h2 className="titulo">Haz tus memes aqui xd</h2>
      
      <select onChange={onChangeImagen}>
        <option value="pablito">Pablito</option>
        <option value="makanaky">Makanaky</option>
        <option value="pantera">La Pantera</option>
        <option value="cuy">Cuy</option>
      </select><br/>

      <input onChange={onChangeLinea1} type="text" placeholder='Linea 1'/> <br/>

      <input onChange={onChangeLinea2}  type="text" placeholder='Linea 2'/> <br/>

      <button onClick={onClickExportar}>Exportar</button>

      <div className="meme" id="meme">
        <span>{linea1}</span><br/>
        <span>{linea2}</span>
        <img src={"/img/"+ imagen +".jpg"}/>
      </div>

      <footer className="footer">
        <h3>by: rodjess</h3>
      </footer>
    </div>
  );
}

export default App;
