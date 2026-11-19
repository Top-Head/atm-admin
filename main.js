import Alpine from "alpinejs";

import { studentTableConfiguration } from "./src/Alpine/studentTableConfig.js";
Alpine.data("studentTableConfiguration", studentTableConfiguration);

import { TableConfiguration } from "./src/Alpine/TableConfiguration.js";
Alpine.data("TableConfiguration", TableConfiguration);

Alpine.start();
