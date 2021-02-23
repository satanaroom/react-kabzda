import React from "react";
import {addPostCreator, updatePostTextCreator} from "../../../redux/profile-reducer"
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState()

    const addPostHandler = () => {
        props.store.dispatch(addPostCreator())
    }

    const onPostHandler = (text) => {
        let action = updatePostTextCreator(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts
            updatePostText={onPostHandler}
            addPost={addPostHandler}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
}

export default MyPostsContainer



