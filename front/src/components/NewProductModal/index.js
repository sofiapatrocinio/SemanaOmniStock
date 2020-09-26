import React from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'

export default function NewProductModal({modalVisible, setModalVisible}) {
    return ( 
        <Modal isOpen={modalVisible} toggle={() => {
            setModalVisible(!modalVisible);
        }}>
        <ModalHeader toggle={() => {
            setModalVisible(!modalVisible);
        }}>Adicionar produto
        </ModalHeader>
        <ModalBody>
         <input placeholder="Nome" />
         <input placeholder="Preço" />
         <input placeholder="Categoria" />
         <button>+</button>
        </ModalBody>
        <ModalFooter>
         <button>Adicionar</button>
        </ModalFooter>
      </Modal>
    )
}