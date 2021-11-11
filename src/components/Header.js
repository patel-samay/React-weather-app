import React from 'react';

const Header = () => {

    const style1 = {
        height: '65px',
        backgroundColor: 'rgba(255,255,255,0.3)',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        justifyContent: 'space-between',
        lineHeight: '65px',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
    }
    const style2 = {
        marginLeft: '20px',
        marginRight: '20px',
        margin: '0 auto'

    }
    return (
        <div style={style1}>
            <div style={style2}>
                <h2>WeatherBun</h2>
            </div>
        </div>
    )
}

export default Header
