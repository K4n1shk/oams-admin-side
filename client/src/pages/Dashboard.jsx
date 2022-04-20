import React from 'react'
// import { Bar } from 'react-chartjs-2'
// import Box from '../components/box/Box'
// import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper'
// import SummaryBox, { SummaryBoxSpecial } from '../components/summary-box/SummaryBox'
// import { colors, data } from '../constants'
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// } from 'chart.js'
// import OverallList from '../components/overall-list/OverallList'
// import RevenueList from '../components/revenue-list/RevenueList'

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// )

const Dashboard = () => {
    return (
        <>
            <div className="relative bg-white overflow-hidden max-w-7xl mx-auto">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-10 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg
                            className="hidden lg:block absolute right-0 inset-y-0 h-full w-36 text-white transform translate-x-1/2"
                            fill="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                        <main className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-medium text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block mb-5">IIITDM Kurnool Admissions</span>{' '}
                                    <span className="block text-indigo-600 xl:inline"> Admin Panel</span>
                                </h1>
                                <p className="mt-5 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    OAMS is a web based system for admission management of various departments in educational institute that automates and manages the working of admission process
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                        alt=""
                    />
                </div>
            </div>
        </>
    )
}

export default Dashboard;