import moment, { now } from 'moment';
import React, { useEffect, useState } from 'react'
import "../App.css";

const SideBar = (props) => {

    const [todayCount, setTodayCount] = useState(0);
    const [tomorrowCount, setTomorrowCount] = useState(0);
    const [weekCount, setWeekCount] = useState(0);
    const [monthCount, setMonthCount] = useState(0);
    const [completedCount, setCompletedCount] = useState(0);



    useEffect(() => {
        onLoad();
    }, [props.todos])

    const onLoad = () => {
        var today =0 , tomorrow=0, week=0, month=0, completed=0, diffDay=0, diffHour = 0;

        // diff = new Date().getDay() - moment(props.todos[0]?.finishedAt)._d.getDay() ;
        props.todos.map((todo) => {
            diffDay = new Date(todo.finishedAt).getDay() - new Date().getDay()
            diffHour = (todo.finishedAt - new Date().getTime()) / (1000 * 60 * 60)
            if (todo.status === true) {
                console.log('yeaaaaaa')
                completed++;
            }
            else {
            if (diffDay === 0 && diffHour < 24) {
                console.log(today)
                // console.log(diffDay)
                // console.log(diffHour)
                today = today + 1;
            } else if (diffDay === 1 && diffHour < 48) {
                tomorrow = tomorrow + 1;
            } else if (diffDay > 1 && diffHour < 168) {
                week = week + 1;
            }
            else if (diffDay > 1 && diffHour > 168 && diffHour < 720)
                month++;
        }
            }


        )
        setTodayCount(today);
        setTomorrowCount(tomorrow);
        setWeekCount(week);
        setMonthCount(month);

        setCompletedCount(completed);


        // console.log(new Date(props.todos[0]?.finishedAt))
        // if ( diffDay>0 && )
    }

    return (
        <div className={`${props.dark ? 'bg-dark text-info' : 'bg-light'}`} style={{height:'100vh'}}>
            <div >
                <div className='side-bar d-flex '>
                    <i className="bi bi-brightness-high pe-2"></i>
                    <div className='col-9'>Today</div>
                    <div className='side-bar-count text-muted' >{todayCount}</div>
                </div>

                <div className='side-bar d-flex'>
                    <i className="bi bi-sunset pe-2"></i>
                    <div className='col-9'>Tomorrow</div>
                    <div className='side-bar-count text-muted' >{tomorrowCount}</div>
                </div>

                <div className=' side-bar d-flex'>
                    <i className="bi bi-calendar-week pe-2"></i>
                    <div className='col-9'>This week</div>
                    <div className='side-bar-count text-muted' >{weekCount}</div>
                </div>

                <div className=' side-bar d-flex'>
                    <i className="bi bi-binoculars pe-2"></i>
                    <div className='col-9'>This month</div>
                    <div className='side-bar-count text-muted' >{monthCount}</div>
                </div>

                <div className=' side-bar d-flex'>
                    <i className="bi bi-lightning pe-2"></i>
                    <div className='col-9' >Completed!</div>
                    <div className='side-bar-count text-muted' >{completedCount}</div>
                </div>
            </div>


        </div>
    )
}

export default SideBar