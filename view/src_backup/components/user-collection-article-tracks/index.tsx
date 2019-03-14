import * as React from "react";
import { observer } from "mobx-react";
import {userCollectionVolTracksStore, userStore} from "../../store";
import { Loading } from "../loading";
import { Empty } from "../empty";
import "./index.scss";

function IUserCollectionArticleTracks() {
  const { isFetching } = userStore;
  const { likedVolTracks } = userCollectionVolTracksStore;

  if (isFetching) {
    return <Loading />;
  }

  if (likedVolTracks.length === 0) {
    return <Empty />;
  }

  return (
    <div id="user-collection-article-tracks">
      <h1>VolTracks</h1>
    </div>
  );
}

const UserCollectionArticleTracks = observer(IUserCollectionArticleTracks);

export { UserCollectionArticleTracks };