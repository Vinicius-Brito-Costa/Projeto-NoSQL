const selecionado = (state = 0, action) => {
    state = action.type;
    return state;
}
export default selecionado;