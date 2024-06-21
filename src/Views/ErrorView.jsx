import { useLocation } from "react-router-dom"

export default function ErrorView() {
    const location = useLocation()
    const { state } = location

    return <>
        <h2>Oops! There's been a problem</h2>
        <h3>{state.status}</h3>
        <h4>{state.message}</h4>
    </>
}