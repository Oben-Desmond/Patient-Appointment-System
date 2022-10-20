import React from 'react'

const SummaryCard = ({ value, status, color }: { value: string, status: string, color: string }) => {
    return (
        <div className={`p-5 bg-${color}-light text-${color}-dark rounded-tr-3xl rounded-bl-3xl`}>
            <div className="font-bold text-sm mb-4 text-gray-600">{status}</div>
            <div className="text-4xl font-bold">
                {value}
            </div>
        </div>
    )
}

export default SummaryCard