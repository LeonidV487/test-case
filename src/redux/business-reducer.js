const UPDATE_NEW_BUSINESS_TEXT = "UPDATE_NEW_BUSINESS_TEXT";

let initialState = {
    businessAreaText: ""
}

const businessReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_BUSINESS_TEXT:
            state.businessAreaText = action.businessAreaText
            return state;
        default:
            return state;
    }
}

export const updateBusinessAreaActionCreator = (text) => ({
    type: UPDATE_NEW_BUSINESS_TEXT,
    businessAreaText: text,
});

export default businessReducer;