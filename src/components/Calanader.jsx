import React, { useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from '@fullcalendar/timegrid'
import { useSelector } from 'react-redux'
import { createEvent, deleteEvent, editEvent, getAllEvents } from '../services/eventService'


const Calanader = () => {
    const { events } = useSelector(state => state.events)
    const fetchEvents = async () => {
        await getAllEvents()
    }
    useEffect(()=>{
        fetchEvents()
    },[])
    const handleDateSelect = async (selectInfo) => {
        let calendarApi = selectInfo.view.calendar
        let title = prompt('Please enter a new title for your event')

        calendarApi.unselect()

        if (title) {
            const payload = {
                title,
                id: selectInfo.id,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            }
            await createEvent(payload)
            fetchEvents()
        }
    }
    const handleEventClick = async (clickInfo) => {
        const eventId = clickInfo.event._def.extendedProps._id
        if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            await deleteEvent(eventId)
            fetchEvents()
        }
    }

    const handleEventAdd = async (addInfo) => {
        const payload = addInfo.event.toPlainObject()
        await createEvent(payload)
        fetchEvents()
    }

    const handleEventChange = async (changeInfo) => {
        const eventId = changeInfo.event._def.extendedProps._id
        const payload = changeInfo.event.toPlainObject()
        await editEvent(eventId, payload)
    }
    return (
        <div className="text-center max-w-[1400px] mx-auto my-[50px]">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                initialView='dayGridMonth'
                displayEventEnd={true}
                displayEventTime={true}
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={true}
                select={handleDateSelect}
                events={events}
                eventClick={handleEventClick}
                eventAdd={handleEventAdd}
                eventChange={handleEventChange}
            />
        </div>
    )
}

export default Calanader