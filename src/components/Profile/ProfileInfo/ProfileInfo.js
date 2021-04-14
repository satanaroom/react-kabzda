import React from "react";
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt={'Photos: large users photo'}/>
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

export default ProfileInfo;