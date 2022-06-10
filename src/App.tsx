import { useState } from 'react';

const App = () => {

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }
  return (
    <div>
      <button onClick={handleClick}>{show ? 'Ocultar' : 'Mostrar'}</button>

      {show === true && 
      <div>
        Teste renderizando conteúdo condicional
      </div>}
    </div>
  );
}

export default App;
