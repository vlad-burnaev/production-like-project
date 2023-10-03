import { Modal } from 'shared/ui'
import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}
export const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props

  return (
        <Modal
            className={className}
            isOpen={isOpen}
            onClose={onClose}
            lazy={true}
        >
          <LoginForm />
        </Modal>
  )
}
