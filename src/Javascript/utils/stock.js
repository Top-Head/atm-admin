await getStockSheet();

import { getStockSheet } from "../API/getStock.js";
import { getCookie } from "./getCookies.js";
const totalAccounts = document.querySelector(".totalAccounts");
const totalSheets = document.querySelector(".totalSheets");

export let stock = getCookie("stock");

totalAccounts.innerHTML = JSON.parse(stock).accounts;
totalSheets.innerHTML = JSON.parse(stock).sheets;
