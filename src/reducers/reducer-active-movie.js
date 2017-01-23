export default function(state=null, action){
    switch(action.type) {
        case "MOVIE_CLICKED":
            return action.payload;
            break;
    }
    return state;
}