import React from 'react';
import s from './FromToPanel.module.css'

const FromToPanel = (props) => {
    var dfrom = React.createRef();
    var dto = React.createRef();
    var btnClick = () => {
        console.log(dfrom.current.value);
        console.log(dto.current.value);
    };
    return (
            <div className={s.smenu}>
                <div className={s.calendar}>
                    <div>
                        С
                </div>
                    <input ref={dfrom} type="date" ></input>
                </div>
                <div className={s.calendar}>
                <div>
                        По
                </div>
                    <input ref={dto} type='date'></input>
                </div>
                <button onClick={btnClick}> Привет!</button>
            </div>
    );
}

export default FromToPanel;