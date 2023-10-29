import { Modal } from 'shared/ui'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader'

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
          <Suspense fallback={<Loader />} >
            <LoginFormAsync />
          </Suspense>
        </Modal>
  )
}
