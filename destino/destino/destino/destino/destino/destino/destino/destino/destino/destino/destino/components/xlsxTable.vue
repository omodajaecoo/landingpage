<template>
  <div class="table-main">
    <span v-if="title" class="flex flex-col items-center justify-center text-white font-interRegular table-title">
      {{ title }}
    </span>
    <div v-if="paramsData && paramsData.title" class="desktop-view">
      <table class="params-table">
        <tbody class="params-table__body">
          <tr v-for="(section, sectionIndex) in paramsData.sections" :key="sectionIndex">
            <td :colspan="2">
              <table class="params-table__params">
                <thead
                  class="table_line_menu"
                  @click="menuClick(sectionIndex)"
                >
                  <tr>
                    <td colspan="2" class="table_cell">
                      <div class="table_cell__menu">
                        <div
                          class="icon-plus-menu"
                          :class="[
                            showBlock.includes(`${sectionIndex},`) ? 'open' : 'close',
                          ]"
                        ></div>
                        {{ section.title }}
                      </div>
                    </td>
                  </tr>
                </thead>
                <tbody
                  :style="{
                    display: showBlock.includes(`${sectionIndex},`) ? 'table-row-group' : 'none',
                  }"
                >
                  <tr
                    v-for="(param, paramIndex) in section.params"
                    :key="paramIndex"
                    class="table_line"
                  >
                    <td class="table_cell param-name">{{ param.name }}</td>
                    <td class="table_cell param-value">{{ param.value || '-' }}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="paramsData && paramsData.title" class="mobile-view">
      <table class="params-table params-table-mobile">
        <tbody class="params-table__body">
          <tr v-for="(section, sectionIndex) in paramsData.sections" :key="sectionIndex">
            <td :colspan="2">
              <table class="params-table__params">
                <thead
                  class="table_line_menu"
                  @click="menuClickMobile(sectionIndex)"
                >
                  <tr>
                    <td colspan="2" class="table_cell">
                      <div class="table_cell__menu">
                        <div
                          class="icon-plus-menu"
                          :class="[
                            showBlockMobile.includes(`${sectionIndex},`) ? 'open' : 'close',
                          ]"
                        ></div>
                        {{ section.title }}
                      </div>
                    </td>
                  </tr>
                </thead>
                <tbody
                  :style="{
                    display: showBlockMobile.includes(`${sectionIndex},`) ? 'table-row-group' : 'none',
                  }"
                >
                  <tr
                    v-for="(param, paramIndex) in section.params"
                    :key="paramIndex"
                    class="table_line"
                  >
                    <td class="table_cell param-name">{{ param.name }}</td>
                    <td class="table_cell param-value">{{ param.value || '-' }}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <span v-if="desc" class="flex flex-col items-center justify-center text-white font-interRegular text-center table-desc">
      {{ desc }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import * as XLSX from "xlsx";
import axios from "axios";

const props = defineProps({
  modelName: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: false
  },
  desc: {
    type: String,
    required: false
  }
});

const dir = useRuntimeConfig().public.staticURL + "/";
const paramsData: any = ref("");
const showBlock: any = ref("");
const showBlockMobile: any = ref("");
if (process.client) {
  axios
    .get(dir + "excels/Specs.xlsx", {
      responseType: "arraybuffer",
    })
    .then((res) => {
      let wb = XLSX.read(res.data);
      let sheets = XLSX.utils.sheet_to_csv(wb.Sheets[wb.SheetNames[0]], {
        FS: "[]",
        RS: "{}",
      });
      parseParams(sheets);
    })
    .catch((err) => {
      console.error("Error cargando Excel:", err);
    });
}

function parseParams(csv: any) {
  const data = csv2Array(csv);
  
  const rowNum = data.length;

  // Buscar la columna que corresponde al modelo en la PRIMERA fila
  let targetColIndex = -1;
  const headerRow = data[0]; // La primera fila contiene los nombres de modelos
  for (let j = 1; j < headerRow.length; j++) {
    const cellValue = headerRow[j]?.toString().toLowerCase().trim();
    const searchName = props.modelName.toLowerCase().trim();
    if (cellValue && cellValue.includes(searchName)) {
      targetColIndex = j;
      break;
    }
  }

  // Si no se encuentra el modelo, mostrar error
  if (targetColIndex === -1) {
    console.error(`No se encontró el modelo "${props.modelName}" en el Excel`);
    return;
  }

  // Estructura de datos simplificada para la nueva estructura
  const eData: any = { 
    title: props.modelName, 
    sections: [] 
  };

  let currentSection: any = null;

  // Procesar desde la primera fila
  for (let i = 0; i < rowNum; i++) {
    const row = data[i];
    const paramName = row[0]?.toString().trim();

    if (!paramName) continue; // Saltar filas vacías

    // Detectar si es una sección (la celda tiene texto pero las demás están vacías o es la primera fila con títulos)
    const isSection = i === 0 || (paramName && !row[1] && !row[2] && !row[3]);

    if (isSection && i > 0) {
      // Es un encabezado de sección (Interior, Exterior, etc.)
      currentSection = {
        title: paramName,
        params: []
      };
      eData.sections.push(currentSection);
    } else if (i === 0) {
      // Primera fila: títulos de columnas (ignorar, ya los usamos para buscar el modelo)
      continue;
    } else {
      // Es un parámetro regular
      if (!currentSection) {
        // Si no hay sección actual, crear una por defecto
        currentSection = {
          title: "Especificaciones",
          params: []
        };
        eData.sections.push(currentSection);
      }

      const param: any = {
        name: paramName,
        value: row[targetColIndex]?.toString().trim() || ""
      };

      currentSection.params.push(param);
    }
  }

  paramsData.value = eData;
}

function csv2Array(csv: any) {
  return csv
    .split("{}")
    .map((line: any) => line.split("[]").map((cell: any) => {
      if (typeof cell === 'string') {
        let cleaned = cell.trim();
        if (cleaned.startsWith('"') && cleaned.endsWith('"')) {
          cleaned = cleaned.slice(1, -1);
        }
        cleaned = cleaned.replaceAll('""', '"');
        return cleaned;
      }
      return cell;
    }))
    .filter((line: any) => {
      for (const item of line) if (item) return true;
      return false;
    });
}
function menuClick(k: any) {
  let swiper = (document.querySelector(".insideSwiper") as any)?.swiper;
  if (showBlock.value.includes(`${k},`)) {
    showBlock.value = showBlock.value.replace(`${k},`, "");
  } else {
    showBlock.value += `${k},`;
  }
  setTimeout(() => {
    swiper.update();
    swiper.updateProgress();
  }, 100);
}
function menuClickMobile(k: any) {
  if (showBlockMobile.value.includes(`${k},`)) {
    showBlockMobile.value = showBlockMobile.value.replace(`${k},`, "");
  } else {
    showBlockMobile.value += `${k},`;
  }
}
</script>

<style scoped lang="scss">
.table-main {
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
}

.table-title {
    font-size: 16px;
    margin-bottom: 20px;
    text-align: center;
}
.table-desc {
    font-size: 12px;
    text-align: justify;
    padding-left: 8px;
    padding-right: 8px;
}

.desktop-view {
  display: block;
}

.mobile-view {
  display: none;
}

@media (min-width: 640px) {
  .table-title {
    font-size: 24px;
  }
  .table-desc {
    text-align: center;
    padding-left: 24px;
    padding-right: 24px;
}
  .desktop-view {
    padding-left: 24px;
    padding-right: 24px;
  }
  .mobile-view {
    padding-left: 24px;
    padding-right: 24px;
  }
}

@media (max-width: 1024px) {
  .desktop-view {
    display: none;
  }
  
  .mobile-view {
    display: block;
  }
  
  .params-table-mobile {
    width: 100%;
    margin: 0 auto 20px;
    
    .table_cell {
      padding: 10px 8px;
      font-size: 16px;
    }
    
    .params-table__body {
      .params-table__params {
        .table_line_menu {
          .table_cell {
            padding: 10px 8px;
            
            .table_cell__menu {
              font-size: 16px;
              
              .icon-plus-menu {
                margin: 0 20px 0 10px;
              }
            }
          }
        }
      }
    }
  }
}

.params-table {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto 20px;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #b2b2b298;

  td {
    padding: 0;
  }
  
  .table_cell {
    padding: 10px 8px;
    text-align: left;
    border: solid 1px #b2b2b298;
    font-family: "SourceHanSansSC-Light";
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 1px;
    color: #fefefe;
    
    &.param-name {
      width: 50%;
      font-weight: 500;
    }
    
    &.param-value {
      width: 50%;
    }
    
    &:first-child {
      border-left: none;
      border-right: solid 1px #b2b2b298;
    }
    &:last-child {
      border-left: solid 1px #b2b2b298;
      border-right: none;
    }
  }

  .params-table__body {
    .table_line {
      &:nth-child(even) {
        background-color: #242726;
      }
    }
    .params-table__params {
      width: 100%;
      border-collapse: collapse;
      
      .table_line_menu {
        color: #fff;
        background-color: #1c5367;
        cursor: pointer;
        
        &:hover {
          background-color: #246583;
        }
        
        .table_cell {
          text-align: left;
          font-weight: bold;
          padding: 10px 8px;
          .table_cell__menu {
            display: flex;
            font-family: "SourceHanSansSC-Light";
            font-size: 16px;
            flex-direction: row;
            align-items: center;
            min-height: 24px;

            .icon-plus-menu {
              position: relative;
              margin: 0 34px 0 20px;
              &.close::after {
                transform: rotate3d(0, 0, 1, 90deg);
              }
              &::after {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 10;
                width: 14px;
                height: 1px;
                background: #fff;
                content: "";
                transition: transform 0.3s;
              }

              &::before {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 10;
                width: 14px;
                height: 1px;
                background: #fff;
                content: "";
              }
            }
          }
        }
      }
    }
  }
}

.lang___ar {
  .params-table {
    .table_cell {
      &:first-child {
        border-right: none;
        border-left: solid 1px #b2b2b298;
      }
      &:last-child {
        border-right: solid 1px #b2b2b298;
        border-left: none;
      }
    }
  }
}
</style>
