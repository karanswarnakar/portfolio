import React from 'react'

const MenuBtn = ({currentStatus, changeMenuStatus}) => {

    return (
        <label className="burger" htmlFor="burger"
        >
            <input type="checkbox" id="burger"
                onClick={(e) => {

                    if (currentStatus === true) {
                        changeMenuStatus(false)

                    } else {
                        changeMenuStatus(true)
                    }

                }}
            />
            <span></span>
            <span></span>
            <span></span>
        </label>
    )
}

export default MenuBtn
