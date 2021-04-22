import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: '10'},
        {id: 2, message: 'It\'s my first post', likesCount: '23'}
    ]
}

test('posts length should be increment', () => {
    // 1. test data
    let action = addPost('hello!')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(3)
});

test(`new posts.message should be 'hello!'`, () => {
    // 1. test data
    let action = addPost('hello!')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts[2].message).toBe('hello!')
});

test('after delete posts length should be decrement', () => {
    // 1. test data
    let action = deletePost(1)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(1)
});

test(`after delete posts shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(199)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(2)
});

