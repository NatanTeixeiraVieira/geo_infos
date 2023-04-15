import RemoveAccents from '@/utils/RemoveAccents';

const sortSearchReducer = (state, action) => {
  switch (action.type) {
    case 'A - Z':
      return {
        ...state,
        datas: state.datas.sort((stateA, stateB) =>
          RemoveAccents(stateA.nome) > RemoveAccents(stateB.nome) ? 1 : -1
        ),
      };
    case 'Z - A':
      return {
        ...state,
        datas: state.datas.sort((stateA, stateB) =>
          RemoveAccents(stateA.nome) < RemoveAccents(stateB.nome) ? 1 : -1
        ),
      };
    case 'Regiões (A - Z)':
      return {
        ...state,
        datas: state.datas.sort((stateA, stateB) =>
          stateA.regiao.nome > stateB.regiao.nome ? 1 : -1
        ),
      };
    case 'Regiões (Z - A)':
      return {
        ...state,
        datas: state.datas.sort((stateA, stateB) =>
          stateA.regiao.nome < stateB.regiao.nome ? 1 : -1
        ),
      };
    case 'Menor população':
      return {
        ...state,
        datas: state.datas.sort((stateA, stateB) =>
          stateA.population > stateB.population ? 1 : -1
        ),
      };
    case 'Maior população':
      return {
        ...state,
        datas: state.datas.sort((stateA, stateB) =>
          stateA.population < stateB.population ? 1 : -1
        ),
      };
    case 'search':
      return {
        ...state,
        datas: action.payload.data.filter((data) =>
          RemoveAccents(data.nome.toLowerCase()).includes(
            RemoveAccents(action.payload.value.toLowerCase())
          )
        ),
      };

    default:
      return state;
  }
};

export default sortSearchReducer;
