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
            </div>
        </div>
    )
}

export default ProfileInfo;