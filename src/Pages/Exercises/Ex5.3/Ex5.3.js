import {useState} from 'react';
import { Drawer } from '@mui/material';

const images = [
  "https://www.paturros.es/wp-content/uploads/2021/07/pato-goma-informatico.jpg",
  "https://www.henryschein.es/Products/pato-goma-sonido-sherman-901-5506_600x600.jpg",
  "https://www.paturros.es/wp-content/uploads/2021/04/pato-goma-amarillo.jpg",
];

export default function AccountMenu() {
  const [state, setState] = useState(false)
  const [image, setImage] = useState(images[0])

  function cambiarEstado(newState) {
    setState(newState)
  }

  return (
    <div>
    <img src={image}/>

    <button onClick={()=>cambiarEstado(true)}>
      Open drawer
    </button>

<Drawer
      anchor={'bottom'}
      open={state}
      onClose={()=>cambiarEstado(false)}
    ><p onClick={()=>setImage(images[0])}>Photo 1</p>
    <p onClick={()=>setImage(images[1])}>Photo 2</p>
    <p onClick={()=>setImage(images[2])}>Photo 3</p>

    </Drawer>
    </div>
  );
}
