import React, { useState, useEffect } from "react";

function CalendarEventForm({ slot, event, onAddEvent, onEditEvent, onCancel }) {
  const [title, setTitle] = useState(event ? event.title : "");
  const [color, setColor] = useState(event ? event.color : "#6C5CE7");

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setColor(event.color || "#6C5CE7");
    }
  }, [event]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: event ? event.id : Date.now(),
      title,
      color,
      start: event ? event.start : slot.start,
      end: event ? event.end : slot.end,
    };

    if (event) {
      onEditEvent(newEvent); // Call edit handler
    } else {
      onAddEvent(newEvent); // Call add handler
    }
  };

  return (
    <form onSubmit={handleSubmit} className="calendar-event-form">
      <h3>{event ? "Edit Event" : "Add Event"}</h3>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Color:
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </label>
      <div className="event-form-buttons">
  <button type="submit" style={{ marginRight: "10px" }}>Add Event</button>
  <button type="button" onClick={onCancel}>Cancel</button>
</div>
    </form>
  );
}

export default CalendarEventForm;
