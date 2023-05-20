export const MoviesList = ({movies, deliteMovie}) => {

    return (
        <>
            <ul>
                {movies.map(({ id, title }) => {
                    return (
                        <li key={id}>
                            <h2>{title}</h2>
                            <button onClick={() => deliteMovie(id)}>Delite</button>
                        </li>
                    )
                })
                }
            </ul>
        </>
    )
}