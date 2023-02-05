import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export function HomePage() {

    const {user} = useContext(UserContext);

    return (
        <>
            <h1>Home Page {user?.name}</h1>
            <hr />
            <pre data-testid="pre-label">
                {JSON.stringify(user)}
            </pre>
        </>
    )
}
