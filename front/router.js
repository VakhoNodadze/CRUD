import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

class Router extends BrowserRouter {
    history = history;
}

export default Router
