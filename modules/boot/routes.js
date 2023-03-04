export const ROUTES = [
    {
        path: "/",
        pageName: "Dino's Project",
        element: `app-about`,
    },
    {
        path: "/staff",
        pageName: "Staff",
        element: `app-staff`,
    },
    {
        path: "/works",
        pageName: "Works",
        element: `app-works`,
    },
    {
        path: "/contact-us",
        pageName: "Contact us",
        element: `app-contact`,
    }
]

export function getElement(path) {
    const route = ROUTES.find(route => route.path === path)
    if (route) {
        return route.element
    }
    return null
}