import { classNames } from 'shared/lib'
import cls from './Modal.module.scss'
import React, { type MutableRefObject, type ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { Portal } from 'shared/ui/Portal/Portal'
import { type Mods } from 'shared/lib/classNames/classNames'

const ANIMATION_DELAY = 300

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}
export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy = false } = props

  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

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
      setIsMounted(true)
    }
  }, [isOpen])

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

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
      <Portal>
        <div className={classNames(cls.Modal, mods, [className])}>
          <div className={cls.overlay} onClick={handleClose}>
            <div className={cls.content} onClick={onContentClick}>
              {children}
            </div>
          </div>
        </div>
      </Portal>
  )
}
