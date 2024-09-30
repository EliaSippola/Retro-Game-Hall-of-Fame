import './Record.css'

export function Record({ record, id }) {

    return (
        <div id='record'>
            <p className='id'>{id+1}</p>
            <p className='username'>{record.username}</p>
            <p className='score'>{record.score}</p>
            <p className='time'>{new Date(record.date_time).toLocaleDateString()} {new Date(record.date_time).toLocaleTimeString()}</p>
        </div>
    )
}