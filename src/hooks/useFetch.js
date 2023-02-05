import { useEffect, useState } from "react";

export function useFetch( url ) {

    const [state, setstate] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    async function getFetch() {

        // En caso de que cambie la url
        setstate({...state, isLoading: true});

        // Petición http
        try {
            const response = await fetch(url);
            const data = await response.json();   
            setstate({
                data: data,
                isLoading: false,
                hasError: null
            });
        } catch (error) {
            setstate({
                ...state,
                hasError: true
            });
        }
    }

    useEffect(() => {
      getFetch();
    }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  };
}
