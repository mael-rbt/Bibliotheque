const initialState = {
  livres: [
    {
      id: 1,
      titre: "Il faut sauver le soldat Ryan",
      image: "https://m.media-amazon.com/images/I/51Y1AVYFV4L._SX397_BO1,204,203,200_.jpg",
      stock: 0
    },
    {
      id: 2,
      titre: "La Faille : le Thriller événement",
      image: "https://m.media-amazon.com/images/I/51Y7WkAt2ZL._AC_UF1000,1000_QL80_.jpg",
      stock: 4
    }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        livres: [...state.livres, action.livre]
      };
    case "INCR":
      return {
        ...state,
        livres: state.livres.map((livre) =>
          livre.id === action.id ? { ...livre, stock: livre.stock + 1 } : livre
        )
      };
    case "DECR":
      return {
        ...state,
        livres: state.livres.map((livre) =>
          livre.id === action.id && livre.stock > 0
            ? { ...livre, stock: livre.stock - 1 }
            : livre
        )
      };
    default:
      return state;
  }
};

export { initialState, reducer };