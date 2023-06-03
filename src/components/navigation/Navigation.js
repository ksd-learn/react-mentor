
import { StyledLink } from './Navigation.styled';


export const Navigation = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <StyledLink to='/' >Home</StyledLink>
                    </li>
                    <li>
                        <StyledLink to='events'>Events</StyledLink>
                    </li>
                    <li>
                        <StyledLink to='search' >Search</StyledLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}