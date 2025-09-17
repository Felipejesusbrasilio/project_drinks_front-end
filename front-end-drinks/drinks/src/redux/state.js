const initialState = {

sacola:[]

}


function State_sacola(state=initialState, action){

if(action.type === 'ADD'){

return {...state, sacola: action.payload}

}else{

return state;

}

}

export default State_sacola;