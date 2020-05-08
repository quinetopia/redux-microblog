import { updateVotesWithAPI } from "./actionCreators"

export default function changeVotes(postId, direction, dispatch){

  dispatch(updateVotesWithAPI(postId, direction));

}