'use client'

import styled from '@emotion/styled'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
`

interface AddGroupModalProps {
  onClose: () => void;
}

export default function AddGroupModal({ onClose }: AddGroupModalProps) {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <h2>모임 추가하기</h2>
        {/* 여기에 모임 추가 폼 구현 */}
        <button onClick={onClose}>닫기</button>
      </ModalContent>
    </ModalOverlay>
  )
}