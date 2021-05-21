import React, {useState} from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userImage from '../../../assets/img/userImage.png'
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const mainPhotoSelectedOn = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userImage} className={s.userImage}
                     alt={'Photos: large users photo'}/>
                {
                    props.isOwner && <input type={'file'} onChange={mainPhotoSelectedOn}/>
                }
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                {editMode
                    ? <ProfileDataForm
                        onSubmit={onSubmit}
                        initialValues={props.profile}
                        profile={props.profile}
                    />
                    : <ProfileData
                        profile={props.profile}
                        isOwner={props.isOwner}
                        goToEditMode={() => {
                            setEditMode(true)
                        }}
                    />}
            </div>
        </div>
    )
}

const ProfileData = (props) => <div>
    {props.isOwner && <div>
        <button onClick={props.goToEditMode}>
            edit
        </button>
    </div>}
    <div>
        <b>Full name</b>: {props.profile.fullName}
    </div>
    <div>
        <b>Looking for a job</b>: {props.profile.lookingForAJob ? 'yes' : 'no'}
    </div>
    <div>
        <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
    </div>
    <div>
        <b>About me</b>: {props.profile.aboutMe}
    </div>
    <div>
        <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
    })}
    </div>
</div>

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo

