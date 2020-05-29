import React, { Component, Fragment } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
//Material UI
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';

const styles = {
	palette: {
		primary: {
			light: '#33c9dc',
			main: '#00bcd4',
			dark: '#008394',
			contrastText: '#fff'
		},
		secondary: {
			light: '#ff6333',
			main: '#ff3d00',
			dark: '#b22a00',
			contrastText: '#fff'
		}
	},
	submitButton: {
		position: 'relative',
		float: 'right',
        marginTop: 20,
        marginBottom: 20
	},
	closeButton: {
		position: 'absolute',
		left: '91%',
		top: '6%'
	},
	startButton: {
		position: 'relative',
        margin: '0 auto',
        display:'block',
        marginBottom: 20
	}
};

class ProfileDialog extends Component {
	state = {
		open: false,
		userhandle: '',
		bio: '',
		website: '',
		interest: ''
	};
	handleOpen = () => {
		this.setState({ open: true });
	};
	handleClose = () => {
		this.setState({ open: false });
	};
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	handleSubmit = (event) => {
		event.preventDefault();
		alert('hello');

		const postprofile = {
			userhandle: this.state.userhandle,
			bio: this.state.bio,
			website: this.state.website,
			interest: this.state.interest,
			hobbies: this.state.hobbies
		};
		axios.post('/userprofile', postprofile).then((res) => {
			console.log(res.data);
		});
    };
    
 

	render() {  
         const { classes } = this.props;
		return (
			<Fragment>
				<Button
					onClick={this.handleOpen}
					variant="contained"
					color="primary"
					tip="Update your profile!"
					className={classes.startButton}
				>
					{' '}
					Update Your Profile
				</Button>
				<Dialog open={this.state.open} onClose={this.handleClose} fullWidth maxWidth="sm">
					<Button tip="Close" onClick={this.handleClose} ClassName={classes.closeButton}>
						<CloseIcon />
					</Button>
					<DialogTitle>Update Your Profile</DialogTitle>
					<DialogContent>
						<form onSubmit={this.handleSubmit}>
							<TextField
								name="userhandle"
								type="text"
								label="userhandle"
								multiline
								rows="3"
								placeholder="What is your username?"
								className="textField"
								onChange={this.handleChange}
								fullWidth
							/>
							<TextField
								name="bio"
								type="text"
								label="bio"
								multiline
								rows="3"
								placeholder="Share your bio"
								className="textField"
								onChange={this.handleChange}
								fullWidth
							/>
							<TextField
								name="website"
								type="text"
								label="website"
								multiline
								rows="3"
								placeholder="http://website.com"
								className="textField"
								onChange={this.handleChange}
								fullWidth
							/>
							<TextField
								name="hobbies"
								type="text"
								label="hobbies"
								multiline
								rows="3"
								placeholder="What are your interests?"
								className="textField"
								onChange={this.handleChange}
								fullWidth
							/>

							<Button type="submit" variant="contained" color="primary" className={classes.submitButton}>
								Submit
							</Button>
						</form>
					</DialogContent>
				</Dialog>
			</Fragment>
		);
	}
}

export default withStyles(styles)(ProfileDialog);
