export type Items = {
    title: string
}

export type NavigationMenuItem = {
    title: string,
    href: string,
    children?: NavigationMenuItem[]
}

export type NavItemsType = {
    title: string,
    href?: string,
    children?: NavItemsType[]
}
