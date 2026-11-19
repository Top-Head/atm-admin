import { getStudentAccounts } from "../Javascript/DB/student.js";
import {
  ShowActivitiesDetailsModal,
  exportExtractRedirect,
} from "../Javascript/utils/modalActivitiesDetailConfig.js";
import { ShowErrorScreen } from "../Javascript/utils/showErrorScreen.js";
import { showStudentDetails } from "../Javascript/utils/studentDetailConfig.js";

export function studentTableConfiguration() {
  return {
    totalItems: 0,
    items: [],
    deleteActiveButton: false,
    totalPages: 0,
    objects: 0,
    currentPage: 1,
    itemsPerPage: 5,
    activitiesSelected: [],
    search: "",
    async init() {
      const table = document.querySelector(".table");
      this.items = await getStudentAccounts();
      this.totalItems = await getStudentAccounts().length;
      table.classList.remove("loading");
    },
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
    showDetailStudant(studantRef) {
      showStudentDetails(studantRef);
    },
    exportExtractedActivities(id) {
      exportExtractRedirect(id);
    },
  };
}
