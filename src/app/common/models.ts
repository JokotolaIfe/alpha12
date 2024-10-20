export interface Nav {
    icon: string,
    title: string,
    active: boolean,
    class?: string,
    route?: string,
}

export interface Stat {
    title: string,
    value: string,
    increase?: boolean,
    stat?: number,
}

export interface Slide {
    id: string,
    image: string
    title: string,
    details: string
}

export interface TableData {
    id?: string | number,
    name: string,
    open?: boolean,
    date: Date | string,
    speaker: string,
    status: 'Completed' | 'In Progress'
}