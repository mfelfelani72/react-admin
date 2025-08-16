import React from 'react'

const Table = () => {
  return (
    <div>
        <table className="flex flex-col w-full overflow-x-auto bg-BackgroundSecondary-light dark:bg-BackgroundSecondary-dark rounded-lg">

            <tbody className='min-w-[calc(100vw-18.5rem)]'>
                <tr className=''>
                    <td className='bg-rose-100 w-[2rem] p-2'>Hello</td>
                    <td className='bg-amber-300 w-[calc(100vw-35rem)]'>New</td>
                    <td className='bg-rose-50 w-[15rem]'>Word</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table