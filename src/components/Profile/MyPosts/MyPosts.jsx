import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {

    // let posts = [
    //     {id: 1, message: 'Hi, how are you?', likesCount: '10'},
    //     {id: 2, message: 'It\'s my first post', likesCount: '23'}
    // ];

    const postsElements = props.posts.map(p => <Post message={p.message} like={p.likesCount} id={p.id}/>)

    const newPostElement = React.createRef();

    const  addPostHandler = () => {
        const text = newPostElement.current.value
        alert(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <textarea ref={newPostElement}>
                    Text here
                </textarea>
            </div>
            <div>
                <button
                    onClick={addPostHandler}
                >
                    Add post
                </button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts



