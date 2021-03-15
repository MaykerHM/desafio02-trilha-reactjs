import { MovieCard } from '../components/MovieCard'
import { Header } from '../components/Header'

interface ContentProps {
  selectedGenre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }
  movies: Array<{
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>
}

export function Content({ selectedGenre, movies }: ContentProps) {
  return (
    <div className="container">
      <Header selectedGenre={ selectedGenre } />

      <main>
        <div className="movies-list">
          { movies.map(movie => (
            <MovieCard title={ movie.Title } poster={ movie.Poster } runtime={ movie.Runtime } rating={ movie.Ratings[0].Value } />
          )) }
        </div>
      </main>
    </div>
  )
}