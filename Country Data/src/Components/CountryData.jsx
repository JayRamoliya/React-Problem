import React, { useEffect, useState } from 'react'
import Search from '../Others/Search';

function CountryData() {
    const [searchtext, setSearchText] = useState('')
    const [countrydata, setCountryData] = useState([]);

    // useEffect(() => {
    //     const FetchCountryData = async () => {
    //         try {
    //             const response = await fetch(`https://restcountries.com/v3.1/name/${searchtext}`);
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error: Status ${response.status}`);
    //             }
    //             const data = await response.json();
    //             console.log(data);

    //             setCountryData(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     FetchCountryData()
    // }, [])
    const FetchCountryData = async () => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${searchtext}`);
            if (!response.ok) {
                throw new Error(`HTTP error: Status ${response.status}`);
            }
            const data = await response.json();
            console.log(data);

            setCountryData(data);
        } catch (error) {
            console.log(error);
        }
    }

    const SearchName = (e) => {
        e.preventDefault()
        FetchCountryData()
    }
    return (
        <>
            <form className="max-w-md mx-auto mt-[30px]">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        value={searchtext}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}
                        type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Country" required />
                    <button
                        onClick={(e) => SearchName(e)} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

            <div className="container mx-auto px-[50px] mt-[30px]">
                {countrydata.map((country) => {
                    return <div className="row flex justify-around" key={country.tld}>
                        <div className="col-md-6">
                            <img src={countrydata[0].flags.png} alt="" />
                        </div>
                        <div className="col-md-6">
                            <h1 className="text-2xl font-bold">Name: {countrydata[0].name.common}</h1>
                            <p>Capital: {countrydata[0].capital}</p>
                            <p>Currencies Name: {Object.values(countrydata[0].currencies)[0].name}</p>
                            <p>Currencies Symbol: {Object.values(countrydata[0].currencies)[0].symbol}</p>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}

export default CountryData