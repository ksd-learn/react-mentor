
            //REACT - МАРШРУТИЗАЦИЯ - ROUTER
import { Routes, Route } from "react-router-dom";
import { Layout } from './Layout';
import { HomePage } from '../pages/HomePage';
import { EventsPage } from '../pages/EventsPage';
import { SearchPage } from '../pages/SearchPage';


export const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='events' element={<EventsPage />}></Route>
          <Route path='search' element={<SearchPage />}></Route>
        </Route>
      </Routes>
    </>
  );

}



            //REACT - ХУКИ
//import { useEffect, useState } from "react";
//import { Button } from './Button';
//import { MoviesList } from './MoviesList';
//import { fetchMovies } from '../service/moviesApi';
//import { Loader } from './Loader';
//
//export const App = () => {
//
//  const [movies, setMovies] = useState([]);
//  const [isListShown, setIsListShown] = useState(false);
//  const [page, setPage] = useState(1);
//  const [isLoading, setIsLoading] = useState(false);
//  
//  const toggleVisual = () => {
//    setIsListShown((prevState) => !prevState)
//  };
//
//  const loadMore = () => {
//    setPage((prevState) => prevState + 1)
//  }
//
//  const deliteMovie = (id) => {
//    setMovies((prevstate) => prevstate.filter((item) => item.id !== id))
//  }
//  
//  useEffect(() => {
//    if (isListShown) {
//      
//      setIsLoading(true);
//      fetchMovies(page)
//        .then(({data:{results}}) => {
//        setMovies((prevstate) => [...prevstate, ...results])
//        })
//        .catch((error) => console.log(error))
//        .finally(setIsLoading(false))
//    };
//
//    if (isListShown === false) {
//      setPage(1);
//      setMovies([])
//    }
//  }, [isListShown, page])
//
//  return (
//    <>
//      <Button text={isListShown? 'hide movies list ': 'shown movies list' } clickHandler={toggleVisual} />
//      {isListShown &&
//      <>
//        <MoviesList movies={movies} deliteMovie={deliteMovie} />
//        
//        {!isLoading &&
//          <Button text='Load more' clickHandler={loadMore} />
//        }
//      
//        {isLoading &&
//          <Loader />
//        }
//      </>
//      }
//    </>
//  );
//}
  

            //REACT - КЛАССЫ - СОСТОЯНИЕ
//export class App extends Component {//
//  state = {
//    movies: [],
//    isListShown: false,
//    page: 1,
//    isLoading: false
//  };
//  
//  toggleVisual = () => {
//    this.setState((prevState) => {
//      return { isListShown: !prevState.isListShown }
//    })
//  };//

//  componentDidUpdate(prevProps, prevState) {
//    const { isListShown, page } = this.state;
//    if (prevState.isListShown !== isListShown && isListShown) {
//      this.setState({isLoading: true})
//      fetchMovies(page)
//        .then(({data:{results}}) => {
//        this.setState((prevstate) => {return {movies: [...prevstate.movies, ...results]}})
//        })
//        .catch((error) => console.log(error))
//        .finally(()=> {return this.setState({isLoading: false})})
//    }//

//    if (prevState.isListShown !== isListShown && isListShown === false) {
//      this.setState({ page: 1, movies: []});
//    }
//  }//

//    render() {//

//      const {movies, isListShown} = this.state//

//      return (
//        <>
//          <Button text={isListShown? 'hide movies list ': 'shown movies list' } clickHandler={this.toggleVisual} />
//          
//          {isListShown &&
//            <MoviesList movies={movies} />
//          }
//        </>
//      );
//    }
//  }