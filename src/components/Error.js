import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError();
    console.log(error)
    return(
        <div className="contact">
            <h1>Error Page</h1>
            <p>This is error page</p>
            <p>{error.status} : {error.data}</p>
        </div>
    )
}

export default Error;