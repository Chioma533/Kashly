import React from 'react'

const YearSelector = ({ startYear = 2022, endYear = new Date().getFullYear() }) => {
    const years = [];

    for (let year = endYear; year >= startYear; year--) {
        years.push(year);
    }
    return (
        <>
            <select>
                <option value="">Select Year</option>
                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </>
    )
}

export default YearSelector