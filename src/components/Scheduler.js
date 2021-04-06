import FullCalendar, {formatDate} from '@fullcalendar/react'
import { useState } from 'react';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

function Scheduler() {

    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr)
        console.log(arg.dateStr);
      }

      const renderSidebarEvent = (event) => {
        return (
          <li key={event.id}>
            <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
            <i>{event.title}</i>
          </li>
        )
      }
      const renderSidebar = () => {
        return (
          <div className='scheduler-sidebar'>
            <div className='scheduler-sidebar-section'>
              <h2>Instructions</h2>
              <ul>
                <li>Select dates and you will be prompted to create a new event</li>
                <li>Drag, drop, and resize events</li>
                <li>Click an event to delete it</li>
              </ul>
            </div>
            <div className='scheduler-sidebar-section'>
              <h2>All Events ({currentEvents.length})</h2>
              <ul>
                {currentEvents.map(renderSidebarEvent)}
              </ul>
            </div>
          </div>
        )
      }

      let eventGuid = 0;
      const createEventId = () => {
        return String(eventGuid++)
      }

      const handleDateSelect = (selectInfo) => {
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar
    
        calendarApi.unselect() // clear date selection
    
        if (title) {
          calendarApi.addEvent({
            id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay
          })
        }
      }


      const handleEventClick = (clickInfo) => {
        if (alert(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
          clickInfo.event.remove();
        }
      }

      const handleEvents = (events) => {
        setCurrentEvents(events);
      }

    return (
    <div className='scheduler'>
            {renderSidebar()}
        <div className="scheduler-main">          
            <h1 className='tc'> Scheduler </h1>
            <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
                left: 'prev,next today',
                right: 'title'
              }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateSelect}
            eventClick={handleEventClick}
            eventsSet={handleEvents}
            />
        </div>

    </div>
    )
}


export default Scheduler;