import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import React, { type ReactNode, useState, useRef, useEffect, useCallback } from 'react'
import { Portal } from 'shared/ui/Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'

const ANIMATION_DELAY = 300

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}
export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose } = props

  const [isClosing, setIsClosing] = useState(false)
  const timerRef = useRef(null)
  const { theme } = useTheme()

  const handleClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose()
    }
  }, [handleClose])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  if (!isOpen) {
    return null
  }

  return (
      <Portal>
        <div className={classNames(cls.Modal, mods, [className, cls[theme]])}>
          <div className={cls.overlay} onClick={handleClose}>
            <div className={cls.content} onClick={onContentClick}>
              {children}
            </div>
          </div>
        </div>
      </Portal>
  )
}
