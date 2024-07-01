import { Toast, ToastContainer } from "react-bootstrap";

export default function ErrorToast({ error, toastToggle, setToastToggle, setError }) {

    if (error) {
    return <ToastContainer
        position='bottom-center'
        containerPosition='fixed'>
        <Toast
            autohide='true'
            animation='true'
            variant='error'
            delay='7000'
            onClose={() => {setToastToggle(false)}}
            show={toastToggle}
            bg='danger'>
            <Toast.Header className='toast-error'>Oops! There's a problem</Toast.Header>
            <Toast.Body>
                {error.status ? <p>Status: {error.status}</p> : null }
                {error.message ? <p>{error.message}</p> : null }
            </Toast.Body>
        </Toast>
    </ToastContainer>
    } else {
        return null
    }
}