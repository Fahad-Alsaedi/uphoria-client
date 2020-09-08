import React from "react"
import {Link} from "react-router-dom"
import {makeStyles} from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined"
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PermIdentityIcon from "@material-ui/icons/PermIdentity"
import "../styles/BottomNav.css"

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            bottom: 0,
            position: "fixed",
        },
        [theme.breakpoints.up('md')]: {
            width: "100%",
            height: "100%",
            bottom: 0
        }
    },
}))

const BottomNav = () => {
	const classes = useStyles()
	const [value, setValue] = React.useState("home")

	return (
		<div className="btm-nav">
		<BottomNavigation
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue)
			}}
			showLabels
			className={classes.root}>
			<BottomNavigationAction value="home" component={Link} to="/" label="Home" icon={<HomeOutlinedIcon/>}/>
			<BottomNavigationAction value="upload" component={Link} to="/create" label="Upload" icon={<AddCircleIcon/>}/>
			<BottomNavigationAction value="profile" component={Link} to="/profile" label="Profile" icon={<PermIdentityIcon/>}/>
		</BottomNavigation>
		</div>
	)
}

export default BottomNav
