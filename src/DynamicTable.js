import React from 'react'

const DynamicTable = ({reactionTimes, mouseClickNumber}) => {
  return (
    <div className='dynamic-table'>
        <table>
            <thead>
                <tr>
                    <th>Mouse click number</th>
                    <th>Reaction Time</th>
                </tr>
            </thead>
            <tbody>
                {
                    reactionTimes.map((time, index)=>(
                        <tr key={index}>
                            <td>{mouseClickNumber}</td>
                            <td>{time}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default DynamicTable