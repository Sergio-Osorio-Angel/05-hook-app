import { useCounter, useFetch } from '../hooks'
import { Loading } from './Loading';
import { Quote } from './Quote';

export function MultipleCustomHooks() {


    const { counter, increment } = useCounter(1);
    const {data, isLoading, hasError} = useFetch('https://www.breakingbadapi.com/api/quotes/'+counter);

    const {author, quote} = !!data && data[0];
       
    return (
        <>
        <h1>Breaking Bad</h1>
        <hr></hr>

        {
            (isLoading)
            ? <Loading></Loading>
            : <Quote quote={quote} author={author}></Quote>
        }
        
        <button className="btn btn-primary" onClick={ () => increment() } disabled={isLoading}>
            Next quote
        </button>
        </>
    )
}
