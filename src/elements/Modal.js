import React from "react";
import styled from "styled-components";

export default function Modal({
  className,
  modalVisible,
  children,
  width,
  outline,
  maxWidth,
  borderRadius,
  padding,
  setModalVisible,
}) {
  return (
    <>
      <ModalOverlay modalVisible={modalVisible}>
        <ModalClose
          className="modal-close"
          onClick={() => setModalVisible(false)}
        >
          <svg
            aria-label="닫기"
            class="om3e55n1 b6ax4al1"
            color="#ffffff"
            fill="#ffffff"
            width="25"
            height="25"
            role="img"
            viewBox="0 0 48 48"
          >
            <title>닫기</title>
            <path
              clip-rule="evenodd"
              d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z"
              fillRule="evenodd"
            />
          </svg>
        </ModalClose>
      </ModalOverlay>
      <ModalWrapper className={className} modalVisible={modalVisible}>
        <ModalInner
          className="modal-inner"
          width={width}
          maxWidth={maxWidth}
          outline={outline}
          // style={{ outline: "none" }}
          borderRadius={borderRadius}
          padding={padding}
        >
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.modalVisible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;

const ModalClose = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
`;

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.modalVisible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
  pointer-events: none;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #000;
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  top: 50%;
  transform: translate(0, -50%);
  margin: 0 auto;
  padding: ${(props) => props.padding};
  outline: ${(props) => props.outline};
`;
