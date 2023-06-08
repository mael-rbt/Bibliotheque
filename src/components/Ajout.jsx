import { useContext } from "react";
import { LibrairieContext } from "../provider";

const Ajout = () => {
    const [state, dispatch] = useContext(LibrairieContext);

    const generateId = () => {
      const timestamp = new Date().getTime();
      return `livre-${timestamp}`;
    };

    return(
        <>
        <input type="text" placeholder="Titre" id="title"/>
        <input type="text" placeholder="URL" id="url"/>
        <input type="number" id="stock" defaultValue="0" min="0"/>
        
        <button onClick={() => {
            const ajoutLivre = {
              id: generateId(),
              titre: document.getElementById('title').value,
              image: document.getElementById('url').value,
              stock: parseInt(document.getElementById('stock').value)
            };
            console.log(ajoutLivre);
            dispatch({
              type: "ADD",
              livre: ajoutLivre
            });
        }}>Ajouter</button>
        </>
    )
}

export default Ajout;
