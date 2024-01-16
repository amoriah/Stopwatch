import { useState } from 'react';
import { Stopwatch } from './components/Stopwatch';
import { StudentInfo } from './components/StudentInfo';
import { Navigation, Button, Container } from './components/Styles.styles';

function App() {
    const [showTime, setShowTime] = useState(false);
    const [time, setTime] = useState({ h: 0, m: 0, s: 0 });
    const [timerId, setTimerId] = useState(0);

    const upTime = {
        upH: time.h,
        upM: time.m,
        upS: time.s,
    };

    const clickStop = () => {
        setShowTime(true);
        setTimerId(setInterval(updateFields, 1000));
    };

    const clickInfo = () => {
        setShowTime(false);
        clearInterval(timerId);
        setTime({ h: 0, m: 0, s: 0 });
    };

    const updateFields = () => {
        if (upTime.upM === 60) {
            upTime.upH++;
            upTime.upM = 0;
        }
        if (upTime.upS === 60) {
            upTime.upM++;
            upTime.upS = 0;
        }
        upTime.upS++;
        setTime({
            h: upTime.upH,
            m: upTime.upM,
            s: upTime.upS,
        });
    };

    return (
        <>
            <Navigation>
                <Button onClick={clickInfo}>StudentInfo</Button>
                <Button onClick={clickStop}>StopWatch</Button>
            </Navigation>
            <Container>
                {showTime ? <Stopwatch time={time} /> : <StudentInfo />}
            </Container>
        </>
    );
}

export default App;
