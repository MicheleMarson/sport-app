import React from 'react'
import "../style/SportBox.css"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ShareIcon from '@material-ui/icons/Share';
import { ReactVideo } from "reactjs-media";
import { FacebookShareButton, TwitterShareButton} from 'react-share';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const SportBox = (props) => {
  const {sport, author, athlete, createdDate, createdBefore,
    description, video, views, id} = props

  return (
    <div key={id} className="sportBox">
      <div className="sportBox__user">
        <div className="sportBox__img">
          <img className="sportBox__avarat" src="./img/user_blank.jpg" />
          <p className="sportBox__author">{author}</p>
        </div>
        <small>{createdBefore}</small>
      </div>
      <p className="sportBox__description">{description}</p>
      <ReactVideo
        src={video.url}
        poster={video.poster}
        primaryColor="#ff6161"
      />
      <div className="sportBox__views__likes">
        <p>0 likes</p>
        <p className="sportBox__views">{views}</p>
      </div>
      <div className="sportBox__actions">
        <div className="sportBox__thumb">
          <ThumbUpIcon/>
        </div>
        <div className="sportBox__share">
          <FacebookShareButton url={video.url}>
            <FacebookIcon/>
          </FacebookShareButton>
          <TwitterShareButton url={video.url}>
            <TwitterIcon/>
          </TwitterShareButton>
        </div>
      </div>
    </div>
  )
}

export default SportBox
