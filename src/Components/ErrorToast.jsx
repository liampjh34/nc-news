import { Toast, ToastContainer } from "react-bootstrap";

export default function ErrorToast({ error, toastToggle, setToastToggle, setError }) {
    return <ToastContainer
        position='bottom-center'
        containerPosition='fixed'>
        <Toast
            autohide='true'
            animation='true'
            variant='error'
            delay='3000'
            onClose={() => {setToastToggle(false)}}
            show={toastToggle}
            bg='danger'>
            <Toast.Header className='toast-error'>Oops! There's a problem ({error.status})</Toast.Header>
            <Toast.Body>{error.message}</Toast.Body>
        </Toast>
    </ToastContainer>
}