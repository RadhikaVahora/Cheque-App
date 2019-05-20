import React, { Component } from 'react';
import { Button, Form, Modal ,Label,Header} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


class ChequeModal extends React.Component {
    state = {
        modalst: false
    }

    handleOpen = () => {
        this.setState({
            modalst : true
        });

    }
    handleClose = () => {
        this.setState({
            modalst: false
        });
       
    }
   
    render() {
        return (
                <Modal trigger={<Button color='teal' onClick={this.handleOpen}>Show Cheque</Button>} size='small'
                    open={this.state.modalst}
                    onClose={this.handleClose}
                >
                <Modal.Content>
                    <Form>
                        <Form.Group>
                            <Form.Field width={10}>
                                <Header size="huge" color='blue'>XYZ Bank</Header>
                            </Form.Field>
                            <Form.Field width={6} inline>
                                <label style={{ fontSize: '10px' }}>Date</label>
                                <p style={{fontSize : '13px'}}>{this.props.data.dateform}</p>
                                </Form.Field>
                        </Form.Group>
                        <Form.Group>
                            <Form.Field width={10}>
                                <label style={{ fontSize: '15px'}}>PAY TO</label>
                                <p style={{ fontSize: '13px', fontStyle: 'serif'}}>
                                    {this.props.data.payeeName}</p>
                               
                            </Form.Field>
                            <Form.Field width={6} inline>
                                <label style={{ fontSize: '15px' }}>Amount: </label>
                                <p style={{ fontSize: '13px' }}>{ '$' + this.props.data.amount + '/-'}</p>
                               
                            </Form.Field> 
                        </Form.Group>
                        <Form.Group>
                        <Form.Field width={16}>
                            <p style={{ fontSize: '15px' }}>{this.props.data.amtinwords + '  dollors ' + this.props.data.cents + "  cents only"}</p>
                            </Form.Field>
                        </Form.Group>
                        <Form.Group>
                            <Form.Field width={10}></Form.Field>
                            <Form.Field width={6} inline>
                            <label style={{ fontSize: '15px', position: 'right' }}>Sign</label>
                            <p style={{ fontSize: '13px', textAlign: 'right' }}>_________________</p>
                            </Form.Field>
                            </Form.Group>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <div>
                    <Button primary onClick={this.handleClose}>Save</Button>
                    <Button color='red' onClick={this.handleClose}>Close</Button>
                    </div> 
                </Modal.Actions>
            </Modal>
            );
    }
}
export default ChequeModal;