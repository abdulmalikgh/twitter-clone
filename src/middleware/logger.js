const logger = (store) => (next) => (action)=>{
    console.group(action.type)
     console.log('The state: ', action)
     const returnState = next(action);
     console.log('The new state: ', returnState)
    console.groupEnd()
    return returnState;
}

export default logger;