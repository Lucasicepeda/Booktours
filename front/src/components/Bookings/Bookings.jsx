import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import es from 'date-fns/locale/es'

const getAllDatesBetweenRanges = (dateRanges) => {
    let allDates = [];

    dateRanges.forEach((dateRange) => {
        const currentDate = moment(dateRange.startDate);
        const endDate = moment(dateRange.endDate);

        while (currentDate.isSameOrBefore(endDate)) {
            allDates.push(currentDate.format('YYYY-MM-DD'));
            currentDate.add(1, 'days');
        }
    });

    return allDates;
};

const Bookings = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const data = {
        _id: 'aabbcc',
        date: [
            {
                user: 'fabian',
                startDate: '2023-11-23',
                endDate: '2023-11-28',
            },
            {
                user: 'fabian',
                startDate: '2023-11-30',
                endDate: '2023-12-05',
            },
        ],
    };

    const allDates = getAllDatesBetweenRanges(data.date);

    const isDateEnabled = (date) => {
        return !allDates.includes(moment(date).format('YYYY-MM-DD'));
    };

    const handleStartDateChange = (date) => { setStartDate(date) };
    const handleEndDateChange = (date) => { setEndDate(date) };

    const handleSaveData = () => {
        console.log('inicio', moment(startDate).format('YYYY-MM-DD'));
        console.log('fin', moment(endDate).format('YYYY-MM-DD'));
    };

    return (
        <div className="bookings">
            <h2>Reservas</h2>
            <div>
                <DatePicker
                    selected={startDate}
                    onChange={handleStartDateChange}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
                    filterDate={isDateEnabled}
                    placeholderText="Fecha de inicio"
                    locale={es}
                />
                <DatePicker
                    selected={endDate}
                    onChange={handleEndDateChange}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate || new Date()}
                    filterDate={isDateEnabled}
                    placeholderText="Fecha de fin"
                    locale={es}
                />
            </div>
            <button onClick={handleSaveData}>Reservar</button>
        </div>
    );
};

export default Bookings;