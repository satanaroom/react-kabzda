import React from "react";
import {addPostCreator, updatePostTextCreator} from "../../../redux/profile-reducer"
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
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
            posts={props.posts}
        />
    )
}

export default MyPostsContainer



