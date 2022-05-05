
import React from 'react'

const Pagination = ({onPrevious, onNext}) => {

        const nextPage = ()=> {
            onNext();
        }

        const lastPage =()=> {
            onPrevious();
        }
  return (
    <na>
        <ul className='pagination justify-content-center'>
            <li className='page-item'>
                <button onClick={nextPage} className='page-link'>Previous</button>
            </li>
            <li className='page-item'>
                <button onClick={lastPage} className='page-link'>Next</button>
            </li>
        </ul>
    </na>
  )
}

export default Pagination