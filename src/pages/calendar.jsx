import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import data from "../data/calendar.json";

// https://fullcalendar.io/docs/react

export default () => {
  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };
  return (
    <Fragment>
      <ol className="breadcrumb">
        <li className="breadcrumb-item active">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="breadcrumb-item active">Calendar</li>
      </ol>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        events={data}
      />
    </Fragment>
  );
};
