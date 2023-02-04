export interface MenuI {
    id?: number,
    route?: string,
    name?: string,
    icon?: string;
    children?: Array<MenuI>
}