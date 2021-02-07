import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.image} src={'https://anband.spb.ru/images/100/DSC100111047.jpg'} alt={'background'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava-descr
            </div>
        </div>
    )
}

export default ProfileInfo;