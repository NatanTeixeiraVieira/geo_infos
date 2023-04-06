const HomeReducer = (state, action) => {
  switch (action.type) {
    case 'A - Z':
      return {
        ...state,
        brasilStates: state.brasilStates.sort((stateA, stateB) =>
          stateA.nome > stateB.nome ? 1 : -1
        ),
      };
    case 'Z - A':
      return {
        ...state,
        brasilStates: state.brasilStates.sort((stateA, stateB) =>
          stateA.nome < stateB.nome ? 1 : -1
        ),
      };
    case 'Regiões (A - Z)':
      return {
        ...state,
        brasilStates: state.brasilStates.sort((stateA, stateB) =>
          stateA.regiao.nome > stateB.regiao.nome ? 1 : -1
        ),
      };
    case 'Regiões (Z - A)':
      return {
        ...state,
        brasilStates: state.brasilStates.sort((stateA, stateB) =>
          stateA.regiao.nome < stateB.regiao.nome ? 1 : -1
        ),
      };
    case 'Menor população':
      return {
        ...state,
        brasilStates: state.brasilStates.sort((stateA, stateB) =>
          stateA.population > stateB.population ? 1 : -1
        ),
      };
    case 'Maior população':
      return {
        ...state,
        brasilStates: state.brasilStates.sort((stateA, stateB) =>
          stateA.population < stateB.population ? 1 : -1
        ),
      };
    case 'search':
      return {
        ...state,
        brasilStates: action.payload.data.filter((brasilState) =>
          brasilState.nome
            .toLowerCase()
            .includes(action.payload.value.toLowerCase())
        ),
      };

    default:
      return state;
  }
};

export default HomeReducer;
