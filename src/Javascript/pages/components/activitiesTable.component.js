const containerTable = document.querySelector(".table");

containerTable.innerHTML += ` 
<table>
<thead>
  <tr>
    <th class="in-checkBox"><input type="checkbox" /></th>
    <th>Actividades</th>
    <th>Horário</th>
    <th></th>
  </tr>
</thead>
<tbody>
  <template x-for="item in filteredItems" :key="item.id">
    <tr>
      <td>
        <input
          type="checkbox"
          x-on:change="selectActivities(item.id)"
        />
      </td>
      <td class="transferencia">
        <p x-text="item.type_operation"></p>
        <p class="p2" x-text="item.message_activitie">
          António Gabriel realizou uma transferência de 2500 para
          Paulo Sanguli...
        </p>
      </td>
      <td class="time" x-text="item.date_activitie"></td>
      <td>
        <i x-on:click="showDetailActivities(item.id)">
          <img
            src="../../styles/assets/icons/config.svg"
            alt="config"
          />
        </i>
      </td>
    </tr>
  </template>
</tbody>
</table>
<div class="loadingDiv">
<img src="../../styles/assets/waiting.gif" alt="loading" />
</div>
<div class="showing flex-bt">
<div>
  <p>
    Showing <span x-text="itemsPerPage"></span> of
    <span x-text="totalItems"></span> items
  </p>
</div>
<div class="cont flex">
  <p>
    Rows per pages
    <select name="n-page" id="n-page" x-model="itemsPerPage">
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  </p>
  <p>
    Page <span x-text="currentPage"></span> of
    <span x-text="totalPages"></span>
  </p>
  <div>
    <i
      ><img
        src="../../styles/assets/icons/<<<.svg"
        alt="left"
        x-on:click=" changeCurrentPage(-2)"
    /></i>
    <i
      ><img
        src="../../styles/assets/icons/<<.svg"
        alt="left"
        x-on:click=" changeCurrentPage(-1)"
    /></i>
    <i
      ><img
        src="../../styles/assets/icons/>.svg"
        alt="left"
        x-on:click=" changeCurrentPage(1)"
    /></i>
    <i
      ><img
        src="../../styles/assets/icons/>>.svg"
        alt="left"
        x-on:click=" changeCurrentPage(2)"
    /></i>
  </div>
</div>
</div>
`;
