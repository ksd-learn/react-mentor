import { fetchEvents } from '../service/eventsApi';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const EventsPage = () => {
                                    // Тут выполняем асинхронную операцию,
                                    // например HTTP-запрос за информацией о пользователе
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents()
            .then(setEvents)
    }, [])

    return (
        <>
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