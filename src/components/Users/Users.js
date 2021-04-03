import React from 'react'
import s from './Users.module.css'
import axios from "axios";
import userImage from '../../assets/img/userImage.png'

class Users extends React.Component {
    constructor(props) {
        super(props)

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })

    }
    //Пропы в рендер не приходят!
    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <div>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userImage} alt={'Users photo'}
                                 className={s.avatar}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{'u.location.city'}</div>
                            <div>{'u.location.country'}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    }
}

export default Users