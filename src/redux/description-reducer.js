const UPDATE_NEW_DESCRIPTION_TEXT = "UPDATE_NEW_DESCRIPTION_TEXT";

let initialState = {
    descriptionText: ""
}

const descriptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_DESCRIPTION_TEXT:
            state.descriptionText = action.descriptionText
            return state;
        default:
            return state;
    }
}

export const updateDescriptionActionCreator = (text) => ({
    type: UPDATE_NEW_DESCRIPTION_TEXT,
    descriptionText: text,
});

export default descriptionReducer;