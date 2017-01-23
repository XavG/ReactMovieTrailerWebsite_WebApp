export default function(state=null, action){
    switch(action.type) {
        case "CATEGORY_CLICKED":
            return action.payload;
            break;
    }
    return state;
}