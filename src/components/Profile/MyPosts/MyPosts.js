import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    const postsElements = props.posts.map(p => <Post message={p.message} like={p.likesCount} key={p.id} id={p.id}/>)

    const addNewPost = (values) => {
        props.addPost(values.newPostElement)
    }

    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <ProfileReduxForm onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'newPostElement'}
                    component={'textarea'}
                    placeholder={'Add new post'}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const ProfileReduxForm = reduxForm({form: 'profileAddPostForm'})(AddPostForm)

export default MyPosts



