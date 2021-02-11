const checkbox = (state = false, action) => {
    switch(action.type){
        default:
        case 'MARCADO':
            return !state;
    }
}
export default checkbox;