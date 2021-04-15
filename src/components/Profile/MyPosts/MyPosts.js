import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    const postsElements = props.posts.map(p => <Post message={p.message} like={p.likesCount} key={p.id} id={p.id}/>)

    const newPostElement = React.createRef();

    const addPostHandler = () => {
        props.addPost()
    }

    // const onPostHandler = () => {
    //     let text = newPostElement.current.value
    //     props.updatePostText(text)
    // }

    const ProfileForm = (props) => {
        return <form>
            <div>
                <Field
                    name={'post'}
                    component={'textarea'}
                    // value={props.newPostText}
                    // onChange={onPostHandler}
                />
            </div>
            <div>
                <button onClick={addPostHandler}>Add post</button>
            </div>
        </form>
    }

    const onSubmit = (formData) => {
        console.log(formData)
    }

    const ProfileReduxForm = reduxForm({form: 'post'})(ProfileForm)

    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <ProfileReduxForm onSubmit={onSubmit}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


export default MyPosts



