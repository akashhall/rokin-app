import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ArrowForward from '@material-ui/icons/ArrowForward';
import styles from './user-jss';
import PapperBlock from './../../../materialui/components/PapperBlock/PapperBlock'
import { login } from './../../../api';
import './style.css'


// validation functions
// const required = value => (value == null ? 'Required' : undefined);
// const email = value => (
//     value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
//         ? 'Invalid email'
//         : undefined
// );

class LoginForm extends React.Component {
    state = {
        amount: '',
        password: '',
        username: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };
    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleLogin = () => {
        if (this.state.username !== '' && this.state.password !== '') {
            let data = login(this.state.username, this.state.password);
            data.then((data) => {
                if (!data) {
                    sessionStorage.token = data.data.token;
                    sessionStorage.user_id = data.data.user_id;
                }
                else {
                    console.log("error")
                }
            })
        }
    }

    render() {
        const {
            classes,
            handleSubmit,
            pristine,
            submitting
        } = this.props;
        return (
            <div className={classes.formWrap}>
                <PapperBlock whiteBg title="Login" desc="">
                    <div>
                        <FormControl className={classes.formControl}>
                        </FormControl>
                    </div>
                    <div>
                        <TextField
                            id="filled-adornment-password"
                            className="user-name"
                            variant="filled"
                            type="text"
                            label="username"
                            value={this.state.username}
                            onChange={this.handleChange('username')}
                        />
                        <br />
                        <br />
                        <TextField
                            defaultValue="Error"
                            id="filled-adornment-password"
                            className="user-name"
                            variant="filled"
                            type={this.state.showPassword ? 'text' : 'password'}
                            label="Password"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword} s
                                        >
                                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <br />
                    <div className={classes.btnArea}>
                        {/* <FormControlLabel control={<Field name="checkbox" component={Checkbox} />} label="Remember" /> */}
                        <Button variant="raised" color="primary" onClick={this.handleLogin}>
                            Continue
                      <ArrowForward className={classNames(classes.rightIcon, classes.iconSmall)} disabled={submitting || pristine} />
                        </Button>
                    </div>
                </PapperBlock>
            </div>
        );
    }
}

// LoginForm.propTypes = {
//   classes: PropTypes.object.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   pristine: PropTypes.bool.isRequired,
//   submitting: PropTypes.bool.isRequired,
// };

export default withStyles(styles)(LoginForm);
