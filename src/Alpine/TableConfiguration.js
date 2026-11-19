import { deleteActivities } from "../Javascript/API/deleteActivities.js";
import { deleteAllActivities } from "../Javascript/API/deleteAllActivities.js";
import { getActivities } from "../Javascript/DB/activities.js";

import {
  ShowActivitiesDetailsModal,
  exportExtractRedirect,
} from "../Javascript/utils/modalActivitiesDetailConfig.js";
import { ShowErrorScreen } from "../Javascript/utils/showErrorScreen.js";
import { ShowLoadingScreen } from "../Javascript/utils/showLoadingScreen.js";
import { showOperationSuceessModal } from "../Javascript/utils/showOperationSucessModal.js";

export function TableConfiguration() {
  return {
    activities: [],
    activeLink: "link1",
    optionFilter: "all",
    totalItems: 0,
    items: [],
    async init() {
      const table = document.querySelector(".table");
      table.classList.add("loading");
      this.activities = await getActivities();
      this.totalItems = this.activities.length;
      table.classList.remove("loading");
      if (this.optionFilter == "all") {
        this.items = this.activities.filter((activity) => activity.id != null);
      }
    },

    filterActivities(operation) {
      this.items = this.activities.filter(
        (activity) => activity.type_operation == operation
      );
    },

    showAll() {
      this.items = this.activities.filter((activity) => activity.id != null);
    },

    deleteActiveButton: false,

    deleteActiveButton: false,
    totalPages: 0,
    objects: 0,
    currentPage: 1,
    itemsPerPage: 5,
    activitiesSelected: [],
    search: "",

    showDeleteActivitiesButton() {
      if (this.activitiesSelected.length > 0) {
        this.deleteActiveButton = true;
      } else {
        this.deleteActiveButton = false;
      }
    },
    get filteredItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      this.objects = this.items.filter((i) =>
        i.name.toLowerCase().startsWith(this.search.toLowerCase())
      );

      this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
      return this.objects.slice(start, end);
    },

    changeCurrentPage(a) {
      const n = Number(a);
      let menor = this.currentPage + n;
      if (this.currentPage + n < 1) {
        ShowErrorScreen("Ja não pode deicer");
      } else if (this.currentPage + n > this.totalPages) {
        ShowErrorScreen("Ja não pode Subir");
      } else {
        this.currentPage = this.currentPage + n;
      }
    },

    renderActivityDetail(activits) {
      return this.items[0];
    },
    selectActivities(id) {
      const indexIdOfActivitiesSelected = this.activitiesSelected.indexOf(id);
      if (indexIdOfActivitiesSelected >= 0) {
        this.activitiesSelected.splice(indexIdOfActivitiesSelected, 1);
      } else {
        this.activitiesSelected.push(id);
      }
      this.showDeleteActivitiesButton();
    },
    showDetailActivities(activityId) {
      ShowActivitiesDetailsModal(activityId);
    },
    exportExtractedActivities(id) {
      exportExtractRedirect(id);
    },

    async deleteSelectedActivity() {
      const activitiesSelected = this.activitiesSelected;
      this.activitiesSelected = [];
      ShowLoadingScreen();
      for (let activityId of activitiesSelected) {
        await deleteAllActivities(activityId);
      }
      ShowLoadingScreen();
      showOperationSuceessModal(
        "Atividade removida com sucesso",
        "a tua atividade foi removida com sucesso"
      );
    },
  };
}
