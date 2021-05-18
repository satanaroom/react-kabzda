import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userImage from '../../../assets/img/userImage.png'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const mainPhotoSelectedOn = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userImage} className={s.userImage} alt={'Photos: large users photo'}/>
                {
                    props.isOwner && <input type={'file'} onChange={mainPhotoSelectedOn}/>
                }
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                <div> My contacts:
                    <ul className={s.contactsContainer}>
                        <li>{props.profile.contacts.facebook}</li>
                        <li>{props.profile.contacts.website}</li>
                        <li>{props.profile.contacts.vk}</li>
                        <li>{props.profile.contacts.twitter}</li>
                        <li>{props.profile.contacts.instagram}</li>
                        <li>{props.profile.contacts.youtube}</li>
                        <li>{props.profile.contacts.github}</li>
                        <li>{props.profile.contacts.mainLink}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo

