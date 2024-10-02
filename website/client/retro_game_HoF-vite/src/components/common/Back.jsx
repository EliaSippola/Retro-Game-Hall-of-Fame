import './Back.css'

export function Back() {

    return (
        <div id='back' onClick={() => history.back()}><p>Back</p></div>
    )
}