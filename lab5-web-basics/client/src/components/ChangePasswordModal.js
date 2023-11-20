import React, {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'

const ChangePasswordModal = ({show, handleClose, handleChangePass}) => {
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')

    const handleSave = () => {
        if (newPassword === confirmNewPassword) {
            handleClose()
            setNewPassword('')
            setConfirmNewPassword('')
            handleChangePass(newPassword)
        } else {
            alert("Паролі не співпадають")
        }
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Замінити пароль</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Новий пароль</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Новий пароль"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Введіть новий пароль повторно</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Повторите новый пароль"
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Закрити
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Зберегти зміни
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ChangePasswordModal
