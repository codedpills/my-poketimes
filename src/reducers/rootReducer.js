const initState = {
    posts: [
        {id:'1', title: 'some heading here 1', body: 'lorem ipsum dolort set ame'},
        {id:'2', title: 'some heading here 2', body: 'lorem ipsum dolort set ame'},
        {id:'3', title: 'some heading here 3', body: 'lorem ipsum dolort set ame'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state,
            posts: newPosts
        }
    }
    
    return state;
}

export default rootReducer;