import FullCalendar, {formatDate} from '@fullcalendar/react'
import { useState } from 'react';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


function Scheduler(props) {


    const [prop, setProp] = useState({props});
    const [currentEvents, setCurrentEvents] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    // const dates = { 'a': {'start': 6, 'end': 10}, 'b':{'start': 16, 'end': 21}}
    console.log(prop);
    if(prop.props.location.hasOwnProperty("aboutProps") && prop.props.location.aboutProps.hasOwnProperty("name")){
      console.log(props.location.aboutProps.name)
    }else{
      console.log("Error");
    }

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
              {props.location.hasOwnProperty("aboutProps") && props.location.aboutProps.hasOwnProperty("name")?
              <div>
                <h2>Schedule an Appointment</h2>
                <p>Doctor Name: Dr. {props.location.aboutProps.name}</p>
                <p>Available from {props.location.aboutProps.timings.start} to {props.location.aboutProps.timings.end + 1}</p>
              </div>
              :<div> <h2>Instruction</h2></div>}
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


          {/* MODAL */}
          {/* <Button variant="primary" onClick={() => setModalShow(true)}>
            Launch vertically centered modal
          </Button> */}

          



          </div>





          
        )
      }

      let eventGuid = 0;
      const createEventId = () => {
        return String(eventGuid++)
      }

      const handleDateSelect = (selectInfo) => {
        console.log(selectInfo)
        handleModal();
        // let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar
        
        calendarApi.unselect() // clear date selection
        let title = "Appointment with Dr. " + props.location.aboutProps.name  + " is fixed";
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
        if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
          console.log("True")
          clickInfo.event.remove();
          setMobile("");
          setEmail("");
        }
      }

      const handleEvents = (events) => {
        setCurrentEvents(events);
      }

      const checkAllow = (selectInfo) => {
        var startDate = new Date(selectInfo.startStr);
        var sminutes = startDate.getMinutes();
        var shours = startDate.getHours();
        var endDate = new Date(selectInfo.endStr);
        var eminutes = endDate.getMinutes();
        var ehours = endDate.getHours();
        console.log("Minutes :",sminutes, "start hours :",shours)
        console.log("Minutes :",eminutes, "end hours :",ehours)
        if(shours >= prop.props.location.aboutProps.timings.start && ehours<= prop.props.location.aboutProps.timings.end
           && currentEvents.length <= 0 && ehours-shours<=1){
          return true
        }else
        return false;
      }

      const handleModal = () =>{
        setModalShow(!modalShow);
      }

      const handleSubmit = () => {
        if(!mobile){
          window.alert("Please enter required details before submission!!");
        }else{
          handleModal();
          console.log(mobile, email);
        }
      }

      const onChangeMobile = (event) => {
        setMobile(event.target.value)
      }

      const onChangeEmail = (event) => {
        setEmail(event.target.value)
      }
      
    return (
    <div className='scheduler'>
            {renderSidebar()}
        <div className="scheduler-main">         
            <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
                left: 'prev,next today',
                right: 'title'
              }}
            initialView='timeGridWeek'
            disableDragging={true}
            selectable={true}
            selectAllow = {checkAllow}
            selectable = {true}
            editable= {false}
            dayMaxEvents={true}
            select = {handleDateSelect}
            eventClick={handleEventClick}
            eventsSet={handleEvents}
            />

            <Modal show={modalShow}>
              <Modal.Header>
                Book Appointment
              </Modal.Header>
              <Modal.Body>
                <Form noValidate validated={true} >
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  type="email" placeholder="Enter email"  onChange={(onChangeEmail.bind(this))} />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicMobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control required type="mobile" placeholder="Mobile Number" onChange={onChangeMobile.bind(this)}/>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={()=>{handleSubmit()}}> Continue </Button>
              </Modal.Footer>
            </Modal>



        </div>

    </div>
    )
}


export default Scheduler;