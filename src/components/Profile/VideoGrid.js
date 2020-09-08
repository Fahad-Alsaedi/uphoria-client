import React from "react"
import { graphql } from "react-apollo"
import gql from "graphql-tag"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Video from "../Video"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  video: {
    padding: theme.spacing(1),
    textAlign: "center",
    width: "100%",
    position: "relative",
  },
}))

const VideoGrid = (props) => {
  const classes = useStyles()

  function FormRow() {
    console.log(props.user)

    return (
      <React.Fragment>
        <Grid item xs={4}>
          <img
            src="https://via.placeholder.com/200x350"
            className={classes.video}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src="https://via.placeholder.com/200x350"
            className={classes.video}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src="https://via.placeholder.com/200x350"
            className={classes.video}
          />
        </Grid>
      </React.Fragment>
    )
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item s={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item s={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item s={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  )
}

const UserVideos = gql`
  {
    user(id: props.user) {
      id
      username
      email
      videos {
        videoUrl
      }
    }
  }
`

export default graphql(UserVideos)(VideoGrid)
