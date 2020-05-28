const UPDATE_NEW_COMPANY_TEXT = "UPDATE_NEW_COMPANY_NAME";
const UPDATE_NEW_NUMBER = "UPDATE_NEW_NUMBER";
const CHECK_NEW_COMPANY_TEXT = "CHECK_NEW_COMPANY_TEXT";

let initialState = {
    newTextCompanyName: "",
    numberOfPeople: ""
}

const companyReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_NUMBER:
            state.numberOfPeople = action.numberOfPeople
            return state;
        case UPDATE_NEW_COMPANY_TEXT:
            state.newTextCompanyName = action.newTextCompanyName;
            return state;
        case CHECK_NEW_COMPANY_TEXT:
            if (action.newTextCompanyName === "") {
                return state;
            } else {
                state.newTextCompanyName = action.newTextCompanyName;
                return state;
            }
        default:
            return state;
    }
}

export const checkCompanyActionCreator = (text) => ({
    type: CHECK_NEW_COMPANY_TEXT,
    newTextCompanyName: text,
});

export const updateCompanyActionCreator = (text) => ({
    type: UPDATE_NEW_COMPANY_TEXT,
    newTextCompanyName: text,
});

export const updateNumberActionCreator = (number) => ({
    type: UPDATE_NEW_NUMBER,
    numberOfPeople: number,
});

export default companyReducer;