import { deleteActivities } from "../API/deleteActivities.js";
import { exportExtract } from "../API/exportExtract.js";
import { getActivities } from "../DB/activities.js";
import { ShowLoadingScreen } from "./showLoadingScreen.js";

const modalActivitiesDetails = document.querySelector(
  ".modal-activities-details"
);
const activitiesDetailName = document.querySelector(".activitiesDetailName");
const activitiesDetailCode = document.querySelector(".activitiesDetailCode");
const activitiesDetailTurma = document.querySelector(".activitiesDetailTurma");
const activitiesDetailContact = document.querySelector(
  ".activitiesDetailContact"
);
const deleteExtratoBtn = document.querySelector(".deleteExtratoBtn");
const exportExtractButton = document.querySelector(".exportExtractButton");
const activitiesDetailMessage = document.querySelector(
  ".activitiesDetailMessage"
);
const closeActivitiesDetailsModal = document.querySelector(
  ".close-activities-details"
);

async function getDataActivitiesDetails(activityId) {
  const activities = await getActivities();
  const activity = activities.find((activity) => activity.id === activityId);
  return activity;
}

export function closeAndOpenActivitiesDetailsModal() {
  modalActivitiesDetails.classList.toggle("show");
}

export async function ShowActivitiesDetailsModal(activityId) {
  const activity = await getDataActivitiesDetails(activityId);
  activitiesDetailName.innerHTML = activity.name;
  activitiesDetailCode.innerHTML = activity.ref;
  activitiesDetailContact.innerHTML = activity.number;
  activitiesDetailTurma.innerHTML = activity.grade;
  activitiesDetailMessage.innerHTML = activity.message_activitie;
  exportExtractButton.id = activity.id;
  deleteExtratoBtn.id = activity.id;
  closeAndOpenActivitiesDetailsModal();
}

closeActivitiesDetailsModal.addEventListener("click", () =>
  closeAndOpenActivitiesDetailsModal()
);

//Export extracto ============================================================

export function exportExtractRedirect(id_activitie) {
  const activity = getDataActivitiesDetails(id_activitie);
  exportExtract({ d_activitie: activity.id });
}

exportExtractButton.addEventListener("click", (e) => {
  e.preventDefault();
  closeAndOpenActivitiesDetailsModal();
  exportExtractRedirect(Number(e.target.id));
});

// delete one extracto ============================================================

async function deleteActivityDetailed(id_activitie) {
  const activity = await getDataActivitiesDetails(id_activitie);
  await deleteActivities(activity.id);
}

deleteExtratoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  closeAndOpenActivitiesDetailsModal();
  deleteActivityDetailed(Number(e.target.id));
});
