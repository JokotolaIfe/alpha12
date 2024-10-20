import { Nav, Slide, Stat, TableData } from "./models"

const navlinks: Nav[] = [
    { title: 'Home', icon: 'fi fi-rr-home', active: true, route: 'home' },
    { title: 'Events', icon: 'fi fi-rr-calendar', active: false },
    { title: 'Speakers', icon: 'fi fi-rr-user', active: false },
    { title: 'Reports', icon: 'fi fi-rr-poll-h', active: false },
    { title: 'Notifications', icon: 'fi fi-rr-bell', active: false },
    { title: 'Messages', icon: 'fi fi-rr-messages', active: false },
    { title: 'Settings', icon: 'fi fi-rr-settings', active: false },
    { title: 'Collapse', icon: 'fi fi-rr-angle-double-small-left', active: false },
]

const tabs: Nav[] = [
    { title: 'Home', icon: 'fi fi-rr-home', active: true, route: 'home' },
    { title: 'Events', icon: 'fi fi-rr-calendar', active: false },
    { title: 'Speakers', icon: 'fi fi-rr-user', active: false },
    { title: 'Reports', icon: 'fi fi-rr-poll-h', active: false },
    { title: 'Profile', icon: 'fi fi-rr-circle-user', active: false },
]

const stats: Stat[] = [
    {
        title: 'Total Events',
        value: '100,000',
        increase: true,
        stat: 5.0
    },
    {
        title: 'Active Speakers',
        value: '25',
        increase: false,
        stat: 5.0
    },
    {
        title: 'Total Registrations',
        value: '300',
        increase: true,
        stat: 5.0
    },
    {
        title: 'Total Revenue',
        value: '$500,000',
        increase: true,
        stat: 5.0
    },
]

const slides: Slide[] = [
    {
        id: '1',
        image: 'images/slide.png',
        title: 'Latest News & Updates',
        details: 'Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.'
    },
    {
        id: '2',
        image: 'images/slide1.png',
        title: 'Latest News & Updates',
        details: 'Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.'
    },
    {
        id: '3',
        image: 'images/slide2.png',
        title: 'Latest News & Updates',
        details: 'Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.'
    },
]

const tableData: TableData[] = [
    { name: 'Cloud Innovation Summit', date: '2024-10-15', speaker: 'Jane Doe', status: 'Completed' },
    { name: 'Blockchain Revolution Conference', date: '2024-11-05', speaker: 'Dr. Peter Smith', status: 'In Progress' },
    { name: 'AI in Healthcare Symposium', date: '2024-12-01', speaker: 'Dr. Aisha Malik', status: 'Completed' },
    { name: 'Future of Fintech Forum', date: '2024-10-25', speaker: 'John Lee', status: 'Completed' },
    { name: 'Data Analytics in Business', date: '2024-11-12', speaker: 'Rachel Moore', status: 'Completed' },
    { name: 'Sustainable Energy Expo', date: '2024-09-28', speaker: 'Prof. Alan Green', status: 'Completed' },
    { name: 'Web3 Interfaces Workshop', date: '2024-10-10', speaker: 'Kevin Adams', status: 'In Progress' },
    { name: 'Cybersecurity for Startups', date: '2024-11-19', speaker: 'Emily Zhang', status: 'Completed' },
    { name: 'Smart Cities Forum', date: '2024-10-18', speaker: 'Dr. Maria Hernandez', status: 'In Progress' },
    { name: 'Tech Safari Mixer', date: '2024-09-30', speaker: 'Guest Panel', status: 'In Progress' },
    { name: 'ASDF Innovation Summit', date: '2024-10-15', speaker: 'Jane Doe', status: 'Completed' },
    { name: 'Blockchain Revolution Conference', date: '2024-11-05', speaker: 'Dr. Peter Smith', status: 'In Progress' },
    { name: 'AI in Healthcare Symposium', date: '2024-12-01', speaker: 'Dr. Aisha Malik', status: 'Completed' },
    { name: 'Future of Fintech Forum', date: '2024-10-25', speaker: 'John Lee', status: 'In Progress' },
    { name: 'Data Analytics in Business', date: '2024-11-12', speaker: 'Rachel Moore', status: 'Completed' },
    { name: 'Sustainable Energy Expo', date: '2024-09-28', speaker: 'Prof. Alan Green', status: 'Completed' },
    { name: 'Web3 Interfaces Workshop', date: '2024-10-10', speaker: 'Kevin Adams', status: 'In Progress' },
    { name: 'Cybersecurity for Startups', date: '2024-11-19', speaker: 'Emily Zhang', status: 'Completed' },
    { name: 'Smart Cities Forum', date: '2024-10-18', speaker: 'Dr. Maria Hernandez', status: 'Completed' },
    { name: 'Tech Safari Mixer', date: '2024-09-30', speaker: 'Guest Panel', status: 'In Progress' },
    { name: 'GHIJ Innovation Summit', date: '2024-10-15', speaker: 'Jane Doe', status: 'Completed' },
    { name: 'Blockchain Revolution Conference', date: '2024-11-05', speaker: 'Dr. Peter Smith', status: 'In Progress' },
    { name: 'AI in Healthcare Symposium', date: '2024-12-01', speaker: 'Dr. Aisha Malik', status: 'Completed' },
    { name: 'Future of Fintech Forum', date: '2024-10-25', speaker: 'John Lee', status: 'In Progress' },
    { name: 'Data Analytics in Business', date: '2024-11-12', speaker: 'Rachel Moore', status: 'Completed' },
    { name: 'Sustainable Energy Expo', date: '2024-09-28', speaker: 'Prof. Alan Green', status: 'In Progress' },
];

const chartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const chartDatasets: number[] = [650, 900, 780, 400, 1000, 550, 900, 350, 820, 600, 980, 380];

const extras = {
    noOfTableDataToShow: 10,
}

export {
    navlinks,
    stats,
    tabs,
    slides,
    tableData,
    extras,
    chartLabels,
    chartDatasets
}