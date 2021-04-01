import React from 'react'
import s from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'data:image/png;base64,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',
                followed: false,
                fullName: 'Yan',
                status: "Hello! I'm here",
                location: {city: 'Tver', country: 'Russia'}
            },
            {
                id: 2,
                photoUrl: 'data:image/png;base64,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',
                followed: true,
                fullName: 'Petr P.',
                status: 'Hello! How are you?',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'data:image/png;base64,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',
                followed: false,
                fullName: 'Dima K.',
                status: 'I like running',
                location: {city: 'Saint-Petersburg', country: 'Russia'}
            },
            {
                id: 4,
                photoUrl: 'data:image/png;base64,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',
                followed: true,
                fullName: 'Ivan',
                status: 'Good for you!',
                location: {city: 'Polock', country: 'Belarus'}
            }
        ])
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <div>
                        <div>
                            <img src={u.photoUrl} alt={'Users photo'} className={s.avatar}/>
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users