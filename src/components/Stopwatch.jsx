import { useState } from 'react';
import { TimeList } from './TimeList';
import { Time, ListContainer, ListButton } from './Styles.styles';

export const Stopwatch = ({ time }) => {
    const h = time.h < 10 ? '0' + time.h : time.h;
    const m = time.m < 10 ? '0' + time.m : time.m;
    const s = time.s < 10 ? '0' + time.s : time.s;
    const listEl = { h, m, s };

    const [save, setSave] = useState([]);
    const [reset, setReset] = useState(false);

    const addTime = () => {
        setReset(false);
        setSave(listEl);
    };

    const onReset = () => {
        setReset(true);
    };

    return (
        <div>
            <Time>{h + ':' + m + ':' + s}</Time>
            <ListContainer>
                <ListButton onClick={addTime}>Add</ListButton>
                <ListButton onClick={onReset}>Reset</ListButton>
                <TimeList
                    time={save}
                    reset={reset}
                />
            </ListContainer>
        </div>
    );
};
