import s from "./Users.module.css";
import userImage from "../../assets/img/userImage.png";
import React from "react";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span
                    className={props.currentPage === p && s.selectedPage}
                    onClick={() => {
                        props.onPageChanged(p)
                    }}
                >{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : userImage}
                                 alt={'Users photo'}
                                 className={s.avatar}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
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

export default Users