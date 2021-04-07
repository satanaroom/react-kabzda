import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={s.image} src={'https://anband.spb.ru/images/100/DSC100111047.jpg'} alt={'background'}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt={'Photos: large users photo'}/>
                <div> Status: {props.profile.aboutMe} </div>
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