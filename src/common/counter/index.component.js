import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import './index.component.scss';

export default function Counter(props) {
    const [counterValue, setCounterValue] = useState(60)

    useEffect(()=>{
        setTimeout(()=> {
            if(counterValue){
                setCounterValue(counterValue-1)
            } else {
                setCounterValue(60)
            }
        }, 1000)
    },[counterValue])

    return (
        <div style={{width: 35, height: 35, marginRight: 20}}>
            <CircularProgressbar
                value={counterValue}
                maxValue={60}
                text={counterValue}
                color='#5dc7c2'
                styles={buildStyles({
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                
                    // Text size
                    textSize: '42px',
                
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,
                
                    // Colors
                    pathColor: `rgba(93, 199, 194, ${counterValue / 100})`,
                    
                    textColor: '#5dc7c2',

                    trailColor: '#ccc'
                  })}
            />
        </div>
    );
}