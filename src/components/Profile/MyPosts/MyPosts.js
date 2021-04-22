import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilities/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength15 = maxLengthCreator(15)

const MyPosts= React.memo(props => {
    // Вместо PureComponent можно использовать Memo, отходя от классов
    // class MyPosts extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return nextProps !== this.props || nextState !== this.state
    // }

    //Пример как можно перевернуть массив,
    //работая только с его копией
    const postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post message={p.message} like={p.likesCount} key={p.id}
                                                     id={p.id}/>)

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
})

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'newPostElement'}
                    component={Textarea}
                    placeholder={'Add new post'}
                    validate={[required, maxLength15]}
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



