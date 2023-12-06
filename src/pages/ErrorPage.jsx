import { useRouteError } from 'react-router-dom';//import the hook

export default function ErrorPage() {
  const error = useRouteError();//use the hook
 
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
