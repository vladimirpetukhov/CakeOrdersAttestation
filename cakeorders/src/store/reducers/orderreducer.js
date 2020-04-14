const initState={
    orders:[
        {id:'1',firstName:'Vladimir',lastName:'Petukhov',address:'Georgi Klisarov',city:'Stara Zagora',phone:'0894545676'},
        {id:'2',firstName:'Kristina',lastName:'Petukhova',address:'Georgi Klisarov',city:'Stara Zagora',phone:'0894545676'},
        {id:'3',firstName:'Kubrat',lastName:'Petukhov',address:'Georgi Klisarov',city:'Stara Zagora',phone:'0894545676'}

    ]
};

const orderReducer=(state=initState,action)=>{
    switch (action.type) {
        case 'CREATE_ORDER':
            console.log('created',action.order);
            break;
    
        default:
            break;
    }
return state;
}

export default orderReducer;