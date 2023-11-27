import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oppss!!</h2>
            <Link to = '/'><button>Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;