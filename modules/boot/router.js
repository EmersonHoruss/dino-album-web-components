import { ROUTES } from "./routes.js"

export class Router {
    #routes = []
    #currentPath = ""

    constructor() {
        this.#routes = ROUTES

        this.#boot()
    }

    #boot() {
        this.#bootUrl()
        this.#bootBackForwardButtons()
    }

    #bootUrl() {
        const path = location.pathname

        this.handlerPath(path)
    }

    handlerPath(path, enablePushState = true) {
        const route = this.#routes.find(route => route.path === path)

        document.title = route.pageName


        if (enablePushState) {
            window.history.pushState(route, "", path)
        }
    }

    #bootBackForwardButtons() {
        window.addEventListener("popstate", event => {
            const path = event.state.path

            this.handlerPath(path, false)
        })
    }
}
