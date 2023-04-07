import RemoveAccents from '@/utils/RemoveAccents';

const StateReducer = (state, action) => {
  switch (action.type) {
    case 'A - Z':
      return {
        ...state,
        dataBrasilCities: state.dataBrasilCities.sort((stateA, stateB) =>
          RemoveAccents(stateA.nome) > RemoveAccents(stateB.nome) ? 1 : -1
        ),
      };

    case 'Z - A':
      return {
        ...state,
        dataBrasilCities: state.dataBrasilCities.sort((stateA, stateB) =>
          RemoveAccents(stateA.nome) < RemoveAccents(stateB.nome) ? 1 : -1
        ),
      };

    case 'search':
      return {
        ...state,
        dataBrasilCities: action.payload.dataBrasilCities.filter((city) =>
          RemoveAccents(city.nome.toLowerCase()).includes(
            RemoveAccents(action.payload.value.toLowerCase())
          )
        ),
      };

    default:
      return {
        ...state,
      };
  }
};

export default StateReducer;
