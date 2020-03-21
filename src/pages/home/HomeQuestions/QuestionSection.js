import React from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import './QuestionSection.scss'
import { Field, Form } from "react-final-form";
import FormValidators from "../../../helpers/form-validators";
import EmailService from "../../../services/EmailService";
import { TextField } from "@material-ui/core";

const Alert = props => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const QuestionSection = () => {
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);

    const onSubmit = async (values) => {
        try {
            const res = await EmailService.send({
                email: values.email,
                name: values.name,
                message: values.message,
            });
            const isSuccess = res.data.sent;
            if (isSuccess) {
                setOpenSuccess(true);
            } else {
                setOpenError(true);
            }
        }
        catch (err) {
            setOpenError(true);
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenError(false);
        setOpenSuccess(false);
    };

    return (
        <div className="container-fluid">
            <Snackbar
                anchorOrigin={{ horizontal: "right", vertical: "top" }}
                open={openSuccess}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="success">
                    {"Thanks for contacting us. We will reply to you ASAP."}
                </Alert>
            </Snackbar>
            <Snackbar
                anchorOrigin={{ horizontal: "right", vertical: "top" }}
                open={openError}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="error">
                    {"Ooops. Something went wrong. Please try again."}
                </Alert>
            </Snackbar>
            <div className="row section-dimensions question-section">
                <div className="container question-section-inside">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="section-header questions-header">Have any questions?</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 offset-3 d-flex justify-content-center text-center
                                col-md-12 offset-md-0
                                justify-content-lg-start">
                            <p className="info-text justify-content-end">Here few ways to get in touch with us</p>
                        </div>
                    </div>
                    <div className="row message-us-part">
                        <div className="col-12 col-lg-8">
                            <div className="col-6 offset-1 offset-lg-0 message-us-parent">
                                <h4 className="text msg-text">Message us</h4>
                            </div>
                            <Form
                                onSubmit={onSubmit}
                                render={({ handleSubmit, form, submitting, valid }) => (
                                    <form onSubmit={async (values) => {
                                        await handleSubmit(values);
                                        form.resetFieldState('name');
                                        form.resetFieldState('email');
                                        form.resetFieldState('message');
                                        setTimeout(form.reset);
                                    }}>
                                        <div className="row">
                                            <div className="col-10 offset-1 offset-lg-0">
                                                <Field
                                                    name="name"
                                                    validate={FormValidators.required("This field is required")}
                                                >
                                                    {props => {
                                                        const {
                                                            input: { name, onChange, value, ...restInput },
                                                            meta,
                                                        } = props;
                                                        return (
                                                            <TextField
                                                                name={name}
                                                                onChange={onChange}
                                                                value={value}
                                                                className="text-field"
                                                                fullWidth
                                                                label="Name"
                                                                multiline
                                                                rows="1"
                                                                rowsMax="1"
                                                                {...restInput}
                                                                variant="filled"
                                                                helperText={meta.touched ? meta.error || meta.submitError : undefined}
                                                                error={(meta.error || meta.submitError) && meta.touched}
                                                            />
                                                        );
                                                    }}
                                                </Field>

                                                <Field
                                                    name="email"
                                                    validate={FormValidators.composeValidators(
                                                        FormValidators.required(),
                                                        FormValidators.isEmail
                                                    )}>
                                                    {props => {
                                                        const {
                                                            input: { name, onChange, value, ...restInput },
                                                            meta,
                                                        } = props;
                                                        return (
                                                            <TextField
                                                                name={name}
                                                                onChange={onChange}
                                                                value={value}
                                                                className="text-field"
                                                                fullWidth
                                                                label="Email"
                                                                multiline
                                                                rows="1"
                                                                rowsMax="1"
                                                                {...restInput}
                                                                variant="filled"
                                                                helperText={meta.touched ? meta.error || meta.submitError : undefined}
                                                                error={(meta.error || meta.submitError) && meta.touched}
                                                            />
                                                        );
                                                    }}
                                                </Field>

                                                <Field
                                                    name="message"
                                                    validate={FormValidators.required("This field is required")}
                                                >
                                                    {props => {
                                                        const {
                                                            input: { name, onChange, value, ...restInput },
                                                            meta,
                                                        } = props;
                                                        return (
                                                            <TextField
                                                                name={name}
                                                                onChange={onChange}
                                                                value={value}
                                                                className="text-field"
                                                                fullWidth
                                                                label="Message"
                                                                multiline
                                                                rows="4"
                                                                rowsMax="4"
                                                                {...restInput}
                                                                variant="filled"
                                                                helperText={meta.touched ? meta.error || meta.submitError : undefined}
                                                                error={(meta.error || meta.submitError) && meta.touched}
                                                            />
                                                        );
                                                    }}
                                                </Field>
                                            </div>

                                        </div>

                                        <div className="button-container">
                                            <button
                                                className="send-btn send-btn-margins button-text"
                                                disabled={submitting || !valid}>
                                                {"SEND"}
                                            </button>

                                        </div>
                                    </form>
                                )}
                            />
                        </div>

                        <div className="col-12 col-lg-4">
                            <div className="row contact-form">
                                <div className="col-12 col-md-4 col-lg-12">
                                    <p className="contact-title">Our phone</p>
                                    <p className="text1">+380990278541</p>
                                </div>
                                <div className="col-12 col-md-4 col-lg-12">
                                    <p className="contact-title">Our email</p>
                                    <p className="text1">sales@intercode.io</p>
                                </div>
                                <div className="col-12 col-md-4 col-lg-12">
                                    <p className="contact-title">Our office</p>
                                    <p className="text1">Bohdana Khmelnytskoho st. 69a <br /> Chernivtsi, Ukraine</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};


export default QuestionSection;
