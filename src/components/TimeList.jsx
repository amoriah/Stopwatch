import { useEffect, useState } from 'react';
import { StyleUl } from './Styles.styles';

export const TimeList = ({ time, reset }) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        if (list.length) {
            const newArray = [...list, time];
            setList(newArray);
        } else setList([time].filter(e => Object.keys(e).length !== 0));
        if (reset) setList([]);
        // eslint-disable-next-line
    }, [time, reset]);

    const timeLis = list.map((time, i) => (
        <li key={i}>
            <p>{time.h + ':' + time.m + ':' + time.s}</p>
        </li>
    ));

    return <StyleUl>{timeLis}</StyleUl>;
};
