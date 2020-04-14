

export const createOrder = (order) => {
	return (dispatch, getState, {getFirebase, getFirestore}) => {
		
		const firestore=getFirestore();
		firestore.collection('orders',add({

		}));

		dispatch({ type: 'CREATE_ORDER', order: order });
	};
};
