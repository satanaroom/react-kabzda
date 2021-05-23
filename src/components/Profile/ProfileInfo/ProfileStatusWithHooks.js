import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status) // Будем устанавливать статус в стейт, только если он поменялся
    }, [props.status]) // Массив зависимостей

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            { !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'Create your status!'}</span>
                </div>
            }
            { editMode &&
                <div>
                    <input
                        value={status}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        onChange={onStatusChange}
                    />
                </div>
            }
        </div>
    )

}

export default ProfileStatusWithHooks