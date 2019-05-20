import React, { Component } from 'react';
import { Button,Form,Checkbox} from 'semantic-ui-react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ChequeModal from './ChequeModal';
import moment from 'moment';
import numbertowords from 'number-to-words';

class Cheque extends React.Component {
    state = {
        date: moment(),
        payeeName: '',
        amount: '',
        modalOpen: false,
        amtinwords: '',
        nameerr: '',
        amterr: '',
        dateform: '',
        cents: '',
    }

    handleName = (e) => {
        this.setState({
            payeeName: e.target.value
        });
    }
    handleAmount = (e) => {
        this.setState({
            amount: e.target.value
        });
    }

    handleStDate = (date) => { 
        this.setState({ date: date });
    }

    tempdata() {
        let errstatus = false;
        let range = false;
        let amount = this.state.amount;
        if (amount > 0 && amount < 10000000000000) { range = true;}
        if (this.state.payeeName != '' && this.state.amount != null && range) {
            errstatus = true;
            this.setState({
                nameerr: "",
                amterr: '',
            });
        }
        if (this.state.payeeName == '') {
            this.setState({
                nameerr: "Please Enter Payee Name"
            });
        } else {
            this.setState({
                nameerr: ""
            });
        }
        if (this.state.amount == '' || !range) {
            this.setState({
                amterr: "Please Enter Anount between 1 to 10000000000000"
            });
        }
        else {
            this.setState({
                amterr: ""
            });
        }
        return errstatus;
    }

    handleFormData = () => {
       let amtinwords = '';
        let amount = this.state.amount;
        let words = require('number-to-words');
        let date = moment(this.state.date).toDate();
        let datefr = moment(date).format("DD-MM-YYYY");
        let datebk = moment(date).format("YYYY-MM-DD");
        
        let Prodata = {
            PayeeName: this.state.payeeName,
            Amount: this.state.amount,
            Date: datebk
        }
        
        if (this.tempdata()) {
            let data = words.toWords(this.state.amount);
            let decimal = amount - Math.floor(amount);
            let decimalval = decimal.toFixed(2);
            let cent = decimalval * 100;
            let centsword = words.toWords(cent);
            //Update the state to values
            this.setState({
                    modalOpen: true,
                    amtinwords: data,
                    dateform: datefr,
                    cents: centsword
                });
            //This is backend to add the cheque generation record.
            //axios({
            //    method: 'post',
            //    url: '/api/Cheques',
            //    data: Prodata
            //}).then(res => {
            //    this.setState({
            //        modalOpen: true,
            //        amtinwords: data,
            //        dateform: datefr,
            //        cents: centsword
            //    });
            //});
        }
    }
    handleClearData = () => {
        this.setState({
            date: moment(),
            payeeName: '',
            amount: '',
            modalOpen: false,
            amtinwords: '',
            nameerr: '',
            amterr: '',
            dateform: '',
        });
    }
    
    render() {
        return (
            <div>
                <h1>Cheque Generation Form</h1>
                <Form>
                    <Form.Field required width={8}>
                        <label>Add Payee Name</label>
                        <input placeholder='Payee Name' onChange={this.handleName} value={this.state.payeeName} />
                        <span style={{ color: "red" }}>{this.state.nameerr}</span>
                    </Form.Field>
                    <Form.Field required width={8}>
                        <label>Amount</label>
                        <input type='number' placeholder='$' onChange={this.handleAmount} value={this.state.amount}/>
                        <span style={{ color: "red" }}>{this.state.amterr}</span>
                    </Form.Field>
                    <Form.Field required>
                        <label>Select Date</label>      
                        <DatePicker
                            onChange={this.handleStDate}
                            selected={this.state.date}
                            tabIndex={1}
                            minDate={new Date()}
                        />
                    </Form.Field>
                    <Form.Field >
                    <Button primary onClick={this.handleFormData}>Generate Cheque</Button>
                    {this.state.modalOpen ? <ChequeModal data={this.state} /> : null}
                    <Button color='red' onClick={this.handleClearData}>Clear Form</Button>
                    </Form.Field>
                </Form>
            </div>       
        );
    }
}

export default Cheque;