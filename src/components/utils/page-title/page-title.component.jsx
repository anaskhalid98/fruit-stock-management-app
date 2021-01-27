import React, {Fragment} from 'react';
import Typography from "@material-ui/core/Typography";
import useStyles from "./page-title.style";

export default function PageTitle(props) {
	const classes = useStyles();

	return (
		<Fragment>
			<div className={classes.container}>
				<Typography style={props.style === undefined ? {marginTop: 20} : props.style} align={"center"}
				            variant={props.variant === undefined ? "h4" : props.variant} gutterBottom>
					{props.titleHeading}
				</Typography>
			</div>
		</Fragment>
	);
}

