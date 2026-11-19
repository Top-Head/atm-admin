import { deleteActivities } from "../../Javascript/API/deleteActivities.js";
import { ShowLoadingScreen } from "../../Javascript/utils/showLoadingScreen.js";

export async function deleteActivitiesSelected(activitiesSelected) {
  activitiesSelected = [];
  ShowLoadingScreen();
  for (let activityId of activitiesSelected) {
    await deleteActivities(activityId);
  }
  ShowLoadingScreen();
}
