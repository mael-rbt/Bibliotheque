import { useContext } from "react";
import { LibrairieContext } from "../provider";

const Home = () => {
    const [state, dispatch] = useContext(LibrairieContext);

    const handleIncrement = (id) => {
      dispatch({ type: 'INCR', id });
    };
    
    const handleDecrement = (id) => {
      dispatch({ type: 'DECR', id });
    };
    return(
        <>
        {state.livres.map((livre, index) => (
        <div key={index} style={{ display:'flex', alignItems:'center', padding:'15px 15px 35px 15px', borderBottom:'1px solid black', backgroundColor: livre.stock === 0 ? '#979797' : '#e79500b3' }}>
          <div  style={{ display:'flex', flexDirection:'column' }}>
            <h2>{livre.titre}</h2>
            <img src={livre.image} alt={livre.titre} width="150px" />
          </div>
          <div style={{ textAlign:'center' }}>
            <p>Quantité : </p>
            <div style={{ display:'flex', alignItems:'center' }}>
              <button onClick={() => handleIncrement(livre.id)}>+</button>
              <p style={{ padding:'15px', fontSize:'18px' }}>{livre.stock}</p>
              <button onClick={() => handleDecrement(livre.id)}>-</button>
            </div>
          </div>
        </div>
      ))}
        </>
    )
}

export default Home;
