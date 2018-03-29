export let state;


export function managePets(state= { pets: [] }, action){
  switch (action.type) {
    case "ADD_PET":
        return Object.assign({}, state, {pets:[...state.pets, action.pet]})
      break;
      case  "REMOVE_PET":
      let filterArr = state.pets.filter(pet=>{
        return pet.id !== action.id
      })
          return Object.assign({}, state, { pets: filterArr})
        break;

    default:
    return state;

  }
}

export function dispatch(action){

  state = managePets(state, action)
    render()
}



export function render(){
  let container = document.getElementById('container');
  let petsList = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  }).join(' ');
  container.innerHTML = `<ul>${petsList}</ul>`;
}
