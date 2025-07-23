import React from 'react'

const BudgetOverview = () => {
    const data = [
        { category: "Groceries", spent: `$${150}`, remaining: `$${350}`, goal: `$${500}` },
        { category: "Books", spent: `$${200}`, remaining: `$${300}`, goal: `$${50}` },
        { category: "Games", spent: `$${1200}`, remaining: `$${100}`, goal: `$${900}` },
        { category: "Recent Activities", spent: `$${50}`, remaining: `$${20}`, goal: `$${30}` },
    ]
    return (
        <div className='cards'>
            <h3>Budget Overview</h3>
            <div className='savings-card'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Spent</th>
                            <th>Remaining</th>
                            <th>Goal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, i) => (
                            <tr key={i}>
                                <td>{row.category}</td>
                                <td>{row.spent.toLocaleString()}</td>
                                <td>{row.remaining.toLocaleString()}</td>
                                <td>{row.goal.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BudgetOverview