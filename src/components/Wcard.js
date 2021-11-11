import React, { useState, useEffect } from 'react';
import '../style/App.css'

const Wcard = () => {
    const [city, setCity] = useState("");
    const [data, setData] = useState("");
    const [name, setName] = useState("");
    const [wind, setWind] = useState("");




    useEffect(() => {
        const callApi = async () => {
            const link = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=434135bd2a40ec999b69dfb0ecc100f1`;
            const rawData = await fetch(link);
            const pasedData = await rawData.json();
            const showName = pasedData.name;
            const showWind = pasedData.wind;
            showName === undefined ? setName("") : setName(pasedData.name);
            showWind === undefined ? setName("") : setWind(pasedData.wind);
            setData(pasedData.main);
        }
        callApi()
    }, [city])

    const change = (event) => {
        setCity(event.target.value);
    }

    const style1 = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '5px',
        marginRight: '10px',
        marginLeft: '10px',
    }
    const style2 = {
        padding: '10px 30px',
        borderRadius: '20px',
        outline: 'none',
        border: '1px solid white',
        backgroundColor: 'rgba(255,255,255,0.3)',
        backdropFilter: 'blur(5px)',
        fontSize: '18px',
        boxShadow: '0px 0px 100px white',
        transition: ' 1sec ease'
    }


    const style5 = {
        fontSize: '10px',
        fontWeight: 'light',
        position: 'absolute',
        bottom: '-10px',
        left: '0px',
    }
    const style6 = {
        position: 'relative',
        borderTop: '1px solid white',
        paddingTop: '10px',
    }

    return (
        <div id="main">
            <div style={style1}>
                <input style={style2} type="text" autofocus onChange={change} placeholder="Type place name" value={city}></input>
            </div>

            {
                !data ? null :

                    <div id="dataarea">
                        <h1 style={{ fontSize: '30px' }}>{name}</h1><br />
                        <h3 style={style6}><i class="fal fa-clouds"></i>{data.temp} <small><i>Kelvin</i></small><span style={style5}>Temperature</span></h3><br />
                        <h3 style={style6}><i class="fal fa-dewpoint"></i> {data.humidity}%<span style={style5}>Humidity</span></h3><br />
                        <h3 style={style6}><i class="fal fa-water-lower"></i> {data.pressure}  <small><i>hPa</i></small><span style={style5}>Pressure</span></h3><br />
                        <h3 style={style6}><i class="fal fa-wind"></i> {wind.speed}  <small><i>m/s</i></small><span style={style5}>Wind Speed</span></h3>
                    </div>
            }
        </div >
    )
}

export default Wcard
