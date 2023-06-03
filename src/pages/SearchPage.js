import { useState, useEffect } from "react";
import { fetchEventsByName } from '../service/eventsApi';
import { Link, useSearchParams } from "react-router-dom";

export const SearchPage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [events, setEvents] = useState([]);
    const eventname = searchParams.get("eventname");

    useEffect(() => {
                                    // Тут выполняем асинхронную операцию,
                                    // например HTTP-запрос за информацией о пользователе
        if (eventname === "" || eventname === null) return;
        fetchEventsByName(eventname)
            .then(setEvents)
    }, [eventname])

    const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ eventname: form.elements.eventname.value });
    form.reset();
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="eventname" />
            <button type="submit">Search</button>
        </form>
            
        <ul>
            {events.map(item => {
                return (
                    <li key={item.id}>
                        <Link>{ item.name}</Link>
                    </li>
                )
            })}
        </ul>
        </>
        
    )
}