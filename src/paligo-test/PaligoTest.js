import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import { QuestionCircle } from 'react-bootstrap-icons';
import Modal from 'react-bootstrap/Modal'
import './PaligoTest.css'
import { CSHelp, useCSHelp } from '../common'

export const PaligoTest = () => {

    const [, handleCSHelpClick] = useCSHelp('on-boarding.html')

    const [docSource, setDocSource] = useState('')
    const [showIframeDoc, setShowIframeDoc] = useState(false)

    const handleIframeDoc = (helpContextId) => {
        setDocSource(`/paligo-doc/en/${helpContextId}`)
        setShowIframeDoc(true)
    }

    const handleModalClose = () => {
        setShowIframeDoc(false)
    }

    return (
        <>
            <div><b>Paligo Test</b></div>
            <Form>
                <Form.Group>
                    <Row>
                        <Form.Label>As a help icon - Opens documentation in a new browser tab</Form.Label>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Col>
                        <Col>
                            <CSHelp helpId="introduction.html" />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row>
                        <Form.Label>As a help icon - Opens a particular documentation section in a new browser tab</Form.Label>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Col>
                        <Col>
                            <CSHelp helpId="abc123" isSection />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row>
                        <Form.Label>As a help icon - Opens documentation in a new browser window</Form.Label>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Col>
                        <Col>
                            <CSHelp helpId="introduction.html" openNewWindow />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row>
                        <Form.Label>As a hyperlink - Opens documentation in a new browser tab</Form.Label>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted" style={{textAlign: 'left'}}>
                                Enter valid email address. <Button variant="link" size="sm" onClick={handleCSHelpClick}>Click here</Button> for valid formats
                            </Form.Text>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row>
                        <Form.Label>As a help icon - displays a tooltip (Not using Paligo)</Form.Label>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Col>
                        <Col>
                            <OverlayTrigger
                                key='right'
                                placement='right'
                                overlay={
                                    <Tooltip id='tooltip1'>
                                        Email addresses should have valid formats
                                    </Tooltip>
                                }
                                >
                                <QuestionCircle style={{cursor: 'hand'}} />
                            </OverlayTrigger>
                            
                        </Col>
                    </Row>
                </Form.Group>


                <Form.Group>
                    <Row>
                        <Form.Label>As a help icon - Opens up the documentation inside a modal</Form.Label>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Col>
                        <Col>
                            <QuestionCircle style={{cursor: 'hand'}} onClick={() => handleIframeDoc('design.html')}/>
                        </Col>
                    </Row>
                </Form.Group>

                <Modal show={showIframeDoc} dialogClassName="dialog-90w" onHide={handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Documentation</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <iframe src={docSource} style={{width: '100%', height: '400px'}} title="doc" />
                    </Modal.Body>
                </Modal>
                
            </Form>
        </>
    )
}
