import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import gql from "graphql-tag"
import { graphql } from "react-apollo"

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
  let renderVideos = () => {
    console.log(props.data)
    let videos = props.data.videos.map((video, i) => {
      return (
        <Grid item xs={4}>
          <img key={i} src={video.videoUrl} className={classes.video} />
        </Grid>
      )
    })
    return videos
  }
  if (props.data.loading) {
    return <div>Loading...</div>
  }

  function FormRow() {
    return <React.Fragment>{renderVideos()}</React.Fragment>
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item s={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  )
}

const query = gql`
  {
    videos {
      videoUrl
    }
  }
`

export default graphql(query)(VideoGrid)
