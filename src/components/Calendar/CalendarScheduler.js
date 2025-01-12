import React, { useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../styles/Calendar.css";
import CalendarEventForm from "./CalendarEventForm";

const localizer = momentLocalizer(moment);

function CalendarScheduler() {
  const [events, setEvents] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null); // State for selected event
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState(Views.MONTH);

  // 🎨 Dynamic event color styling
  const eventStyleGetter = (event) => {
    const backgroundColor = event.color || "#6C5CE7";
    return {
      style: {
        backgroundColor,
        borderRadius: "8px",
        opacity: 0.9,
        color: "white",
        border: "0px",
        display: "block",
        padding: "5px",
        fontSize: "14px",
      },
    };
  };

  // Handle slot selection for adding events
  const handleSelectSlot = ({ start, end }) => {
    setSelectedSlot({ start, end });
    setSelectedEvent(null); // Clear selected event when adding a new one
  };

  // Handle event selection for editing
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setSelectedSlot(null); // Clear selected slot when editing an event
  };

  // Add a new event
  const handleAddEvent = (event) => {
    setEvents([...events, event]);
    setSelectedSlot(null);
  };

  // Update an existing event
  const handleEditEvent = (updatedEvent) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
    setSelectedEvent(null);
  };

  // ⏩ Handles navigation buttons (Today, Back, Next)
  const handleNavigate = (date) => {
    setCurrentDate(date);
  };

  // 🔄 Handles view changes (Month, Week, Day, Agenda)
  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">📅 VS Pet Care Calendar Scheduler</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        style={{ height: 600, margin: "20px" }}
        views={["month", "week", "day", "agenda"]}
        step={30} // Time slots in minutes
        defaultView={Views.MONTH}
        view={view}
        date={currentDate}
        onNavigate={handleNavigate}
        onView={handleViewChange}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent} // Handle event selection
        eventPropGetter={eventStyleGetter}
      />
      {(selectedSlot || selectedEvent) && (
        <CalendarEventForm
          slot={selectedSlot}
          event={selectedEvent} // Pass selected event for editing
          onAddEvent={handleAddEvent}
          onEditEvent={handleEditEvent} // Pass edit handler
          onCancel={() => {
            setSelectedSlot(null);
            setSelectedEvent(null);
          }}
        />
      )}
    </div>
  );
}

export default CalendarScheduler;
