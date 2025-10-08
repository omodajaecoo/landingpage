<template>
  <div class="table-main">
    <div v-if="paramsData && paramsData.title" :mq="['lg', 'xl', 'md']">
      <div class="h3 title params-table__title">
        <div class="txt">{{ paramsData.title }}</div>
        <img loading="lazy" src="/images/table-title.webp" class="img" />
      </div>
      <table class="params-table">
        <thead class="params-table__header">
          <tr
            v-for="(line, i) in paramsData.header"
            :key="i"
            class="table_line"
            :class="[`line_${i}`, line.length === 1 ? 'line_menu' : '']"
          >
            <td
              v-for="(item, j) in line"
              :key="i + '_' + j"
              class="table_cell"
              :style="{ width: cellWidth }"
              :rowspan="item.rowspan"
              :colspan="item.colspan"
            >
              {{ item.label }}
            </td>
          </tr>
        </thead>
        <tbody class="params-table__body">
          <!-- <tr
            v-for="(line, i) in paramsData.body[0].lines"
            :key="'0_' + i"
            class="table_line"
            :class="[`line_${i}`, line.length === 1 ? 'line_menu' : '']"
          >
            <td
              v-for="(item, j) in line"
              :key="i + '_' + j"
              class="table_cell"
              :style="{ width: cellWidth, fontWeight: i === 0 ? 'bold' : '' }"
              :rowspan="item.rowspan"
              :colspan="item.colspan"
            >
              {{ item.label }}
            </td>
          </tr> -->

          <tr v-for="(block, k) in paramsData.body" :key="k">
            <td :colspan="colNumdata" v-if="k > 0">
              <table class="params-table__params">
                <thead
                  v-if="block.menu"
                  class="table_line_menu"
                  @click="menuClick(k)"
                >
                  <tr>
                    <td
                      v-for="(item, j) in block.menu"
                      :key="'m_' + j"
                      class="table_cell"
                      :style="{ width: cellWidth }"
                      :rowspan="item.rowspan"
                      :colspan="item.colspan"
                    >
                      <div class="table_cell__menu">
                        <div
                          class="icon-plus-menu"
                          :class="[
                            showBlock.includes(`${k},`) ? 'open' : 'close',
                          ]"
                        ></div>
                        {{ item.label }}
                      </div>
                    </td>
                  </tr>
                </thead>
                <tbody
                  :style="{
                    display: showBlock.includes(`${k},`) ? '' : 'none',
                  }"
                >
                  <tr
                    v-for="(line, i) in block.lines"
                    :key="i"
                    class="table_line"
                    :class="[`line_${i}`, line.length === 1 ? 'line_menu' : '']"
                  >
                    <td
                      v-for="(item, j) in line"
                      :key="i + '_' + j"
                      class="table_cell"
                      :style="{
                        width: cellWidth,
                        fontWeight: k === 0 && i === 0 ? 'bold' : '',
                      }"
                      :rowspan="item.rowspan"
                      :colspan="item.colspan"
                    >
                      {{ item.label }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
        <tfoot class="params-table__footer">
          <tr
            v-for="(line, i) in paramsData.footer"
            :key="i"
            class="table_line"
            :class="[`line_${i}`, line.length === 1 ? 'line_menu' : '']"
          >
            <td
              v-for="(item, j) in line"
              :key="i + '_' + j"
              class="table_cell"
              :style="{ width: cellWidth }"
              :rowspan="item.rowspan"
              :colspan="item.colspan"
            >
              {{ item.label }}
            </td>
          </tr>
        </tfoot>
      </table>
      <div class="params-table__remark">{{ paramsData.remarks[0] }}</div>
      <div class="params-table__remark">{{ paramsData.remarks[1] }}</div>
    </div>
    <div v-if="paramsDataMobile && paramsDataMobile.title" :mq="['xs', 'sm']">
      <div class="h3 title params-table__title params-table__title_mobile">
        {{ paramsDataMobile.title }}
      </div>

      <div class="params-div">
        <div class="params-div__select" @click="menuClickMobile(k)">
          <el-select
            v-model="selectModel"
            size="small"
            @change="showBlockMobile = '0,'"
          >
            <el-option
              v-for="(item, i) in paramsDataMobile.header"
              :key="i"
              :label="item"
              :value="i"
            >
            </el-option>
          </el-select>
        </div>

        <div
          v-for="(block, k) in paramsDataMobile.body"
          :key="k"
          class="params-div__block"
        >
          <div
            v-if="block.menu"
            class="params-div__menu params-div__line"
            @click="menuClickMobile(k)"
          >
            <div class="params-div__name">{{ block.menu[0] }}</div>
            <div
              class="params-div__value"
              :class="[showBlockMobile.includes(`${k},`) ? 'open' : 'close']"
            ></div>
          </div>
          <div
            v-if="
              !block.menu ||
              (block.menu[0].toLowerCase() !== 'body color' &&
                block.menu[0].toLowerCase() !== 'color del cuerpo' &&
                block.menu[0].toLowerCase() !== 'لون جسم السيارة')
            "
            class="params-div__body"
            :style="{
              height: showBlockMobile.includes(`${k},`)
                ? `${block.lines.length * 51}px`
                : '0px',
            }"
          >
            <div
              v-for="(item, i) in block.lines"
              :key="i"
              class="params-div__line"
            >
              <div class="params-div__name">{{ item[0] }}</div>
              <div class="params-div__value">{{ item[selectModel + 1] }}</div>
            </div>
          </div>
          <div
            v-else
            class="params-div__body"
            :style="{
              height: showBlockMobile.includes(`${k},`)
                ? `${block.lines.length * 51}px`
                : '0px',
            }"
          >
            <div
              v-for="(item, i) in block.lines"
              :key="i"
              class="params-div__line"
            >
              <div class="params-div__name">{{ item[selectModel + 1] }}</div>
              <div class="params-div__value"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="params-div__remark">{{ paramsDataMobile.remarks[0] }}</div>
      <div class="params-div__remark">{{ paramsDataMobile.remarks[1] }}</div>
    </div>
    <div class="table-hint">
      The pictures and parameters in this website are for reference only, and
      the relevant configuration of the vehicle model will be adjusted
      differently due to different national markets. The actual release of the
      country shall prevail.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as XLSX from "xlsx";
import axios from "axios";

const props = defineProps<{
  dataUrl: string;
}>();

var dir = useRuntimeConfig().public.staticURL + '/';
var paramsData: any = ref("");
var rowNumdata: any = ref(0);
var colNumdata: any = ref(0);
var cellWidth: any = ref("0");
var showBlock: any = ref("0,");
var paramsDataMobile: any = ref("");

var rowNumMobile: any = ref(0);
var colNumMobile: any = ref(0);
var showBlockMobile: any = ref("0,");
var selectModel: any = ref(0);

onMounted(() => {
  if (process.client) {
    axios
      .get(dir + props.dataUrl, {
        responseType: "arraybuffer",
      })
      .then((res) => {
        let wb = XLSX.read(res.data);
        // 获取文档数据
        let sheets = XLSX.utils.sheet_to_csv(wb.Sheets[wb.SheetNames[0]], {
          FS: "[]",
          RS: "{}",
        });
        let sheets2 = XLSX.utils.sheet_to_csv(wb.Sheets[wb.SheetNames[1]], {
          FS: "[]",
          RS: "{}",
        });
        parseParams(sheets);
        // parseParamsMobile(sheets2);
      })
      .catch((err) => {
        // // console.log(err);
      });
  }
});

function parseParams(csv) {
  const data = csv2Array(csv);
  // // console.log(data);
  const rowNum = data.length; // 总行数
  const colNum = data[0].length; // 列数,表格每一行列数应该相等

  let colorLineNum = -1; // 车身颜色是表尾, 之后的应改为备注
  const eData = { title: "", header: [], body: [], footer: [], remarks: [] };
  for (let i = 0; i < rowNum; i++) {
    const line = data[i];
    if (line.length !== colNum)
      throw new Error(`excel结构不对, Sheet1第${i + 1}行列数为${line.length}`);
    const formatLine = [];
    for (let j = 0; j < colNum; j++) {
      if (line[j]) {
        let down = 0;
        let right = 0;
        for (; right < colNum - j - 1; right++) {
          // 向右探索
          if (line[j + right + 1]) {
            break;
          }
        }
        if (j === 0) {
          // 只有第一列需要向下探索
          for (; down < rowNum - i - 1; down++) {
            // 向下探索
            if (data[i + down + 1][j]) {
              break;
            }
          }
        }
        let label = line[j];
        label = label.replaceAll('""', "$");
        label = label.replaceAll('"', "");
        label = label.replaceAll("$", '"');
        formatLine.push({ label, rowspan: down + 1, colspan: right + 1 });
      }
    }
    if (formatLine.length === 0)
      throw new Error(`excel结构不对, 第${i + 1}行为空行`);
    if (i === 0) {
      // 第0行是车型标题
      eData.title = formatLine[0].label;
    } else if (
      i === 1 ||
      (eData.header[0] &&
        eData.header[0][0] &&
        i < eData.header[0][0].rowspan + 1)
    ) {
      // 第1行第1列决定标题是几行
      eData.header.push(formatLine);
    } else if (
      formatLine[0].label.toLowerCase() === "body color" ||
      formatLine[0].label.toLowerCase() === "color del cuerpo" ||
      formatLine[0].label.toLowerCase() === "لون جسم السيارة"
    ) {
      // Body color是表尾
      eData.footer.push(formatLine);
      colorLineNum = i; // 标记Body color所在行
    } else if (colorLineNum > 0 && i > colorLineNum) {
      // Body Color后面是注释
      eData.remarks.push(formatLine[0].label);
    } else if (formatLine.length === 1) {
      // 只有一个参数,是参数组标题, 第一组参数特殊处理
      if (eData.body.length === 0) {
        formatLine.push({
          label: "",
          rowspan: 1,
          colspan: formatLine[0].colspan - 1,
        });
        formatLine[0].colspan = 1;
        eData.body.push({ lines: [formatLine] });
      } else {
        eData.body.push({ menu: formatLine, lines: [] });
      }
    } else {
      eData.body[eData.body.length - 1].lines.push(formatLine);
    }
  }
  // // console.log(eData);
  paramsData.value = eData;
  rowNumdata.value = rowNum;
  colNumdata.value = colNum;
  cellWidth.value = 100 / colNum + "%";
}
function parseParamsMobile(csv) {
  const data = csv2Array(csv);
  const rowNum = data.length; // 总行数
  const colNum = data[0].length; // 列数,表格每一行列数应该相等

  let colorLineNum = -1; // 车身颜色是表尾, 之后的应改为备注
  const eData = { title: "", header: [], body: [], footer: [], remarks: [] };
  eData.title = data[0][0]; // 第一行为车型标题
  for (let i = 1; i < rowNum; i++) {
    const line = data[i];
    if (line.length !== colNum)
      throw new Error(`excel结构不对, Sheet2第${i + 1}行列数为${line.length}`);
    // 第0列为参数名,不处理
    for (let j = 1; j < colNum; j++) {
      if (!line[j] && j > 1) line[j] = line[j - 1]; // 用左边的值进行填充, 从第二列开始

      if (!line[0]) {
        // 参数名为空,则向上找到不为空的那一行进行合并
        for (let k = i - 1; k > 0; k--) {
          if (data[k][0]) {
            data[k][j] = data[k][j] + " " + line[j];
          }
        }
      }

      let label = line[j];
      label = label.replaceAll('""', "$");
      label = label.replaceAll('"', "");
      label = label.replaceAll("$", '"');
      line[j] = label;
    }
    if (line[0]) {
      let label = line[0];
      label = label.replaceAll('""', "$");
      label = label.replaceAll('"', "");
      label = label.replaceAll("$", '"');
      line[0] = label;
    }

    // 参数名为空的是标题,会合并给第一行,所以要多次加第一行
    if (i === 1 || !line[0]) {
      // 第1行为车型选择
      eData.header = data[1].slice(1);
    } else if (
      line[0].toLowerCase() === "body color" ||
      line[0].toLowerCase() === "color del cuerpo" ||
      line[0].toLowerCase() === "لون جسم السيارة"
    ) {
      // Body Color是表尾, 移动端添加到参数后面
      if (line[1]) {
        eData.body.push({ menu: line, lines: [line] });
      } else {
        // BJ80特殊,颜色是空的,但是还要保留,为了区分表尾
      }

      colorLineNum = i; // 标记Body color所在行
    } else if (colorLineNum > 0 && i > colorLineNum) {
      // Body Color后面是注释
      eData.remarks.push(line[0]);
    } else if (line[0] && !line[1]) {
      // 参数组标题
      if (
        line[0].toLowerCase() === "basic basic" ||
        line[0].toLowerCase() === "básicos"
      ) {
        eData.body.push({ menu: null, lines: [] });
      } else {
        eData.body.push({ menu: line, lines: [] });
      }
    } else {
      // 剩下的都是普通参数
      eData.body[eData.body.length - 1].lines.push(line);
    }
  }

  paramsDataMobile.value = eData;
  rowNumMobile.value = rowNum;
  colNumMobile.value = colNum;
}
function csv2Array(csv) {
  return csv
    .split("{}")
    .map((line) => line.split("[]"))
    .filter((line) => {
      // 剔除空行
      for (const item of line) if (item) return true;
      return false;
    });
}
function menuClick(k) {
  let swiper = document.querySelector(".insideSwiper").swiper;
  if (showBlock.value.includes(`${k},`)) {
    showBlock.value = showBlock.value.replace(`${k},`, "");
  } else {
    showBlock.value += `${k},`;
    // showBlock.value = `${k},`;
  }
  setTimeout(() => {
    swiper.update();
    swiper.updateProgress();
  }, 100);
}
function menuClickMobile(k) {
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
  padding-top: 6rem;
  padding-top: calc(6 * 16 / 19.2 * 1vw);
}
.table-hint {
  width: 80%;
  margin: 2.6rem auto;
  margin: calc(2.6 * 16 / 19.2 * 1vw) auto;
  font-family: "SourceHanSansSC-Light";
  font-size: 1rem;
  font-size: calc(1 * 16 / 19.2 * 1vw);
  color: #fff;
  text-align: left;
  opacity: 0.9;
}
.params-table__title {
  width: 100%;
  height: auto;
  min-height: 2rem;
  min-height: calc(2 * 16 / 19.2 * 1vw);
  position: relative;
  font-family: "SourceHanSansSC-Light";
  font-size: 1.7rem;
  font-size: calc(1.7 * 16 / 19.2 * 1vw);
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 1px;
  color: #fefefe;
  margin: 0 0 2.2rem 15.4rem;
  margin: 0 0 calc(2.2 * 16 / 19.2 * 1vw) calc(15.4 * 16 / 19.2 * 1vw);
  .txt {
    position: absolute;
    top: 0.5rem;
    top: calc(0.5 * 16 / 19.2 * 1vw);
    left: 1rem;
    left: calc(1 * 16 / 19.2 * 1vw);
    color: #fff;
  }
  .img {
    width: 30rem;
    width: calc(30 * 16 / 19.2 * 1vw);
    height: auto;
  }
}

.params-table {
  width: 80%;
  margin: 0 auto 20px;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #b2b2b298;

  td {
    padding: 0;
  }
  .line_0 {
    display: none;
  }
  .table_cell {
    padding: 0.6rem;
    padding: calc(0.6 * 16 / 19.2 * 1vw);
    text-align: center;
    border: solid 1px #b2b2b298;
    font-family: "SourceHanSansSC-Light";
    font-size: 1.2rem;
    font-size: calc(1.2 * 16 / 19.2 * 1vw);
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 1px;
    color: #fefefe;
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
    tbody {
      .line_0 {
        display: none;
      }
      .table_line {
        .table_cell:last-child {
          box-shadow: rgba(255, 255, 255, 0.3) 0px 0px 5px;
        }
      }
    }
    .table_line {
      &:nth-child(even) {
        background-color: #242726;
      }
    }
    .params-table__params {
      width: 100%;
      border-collapse: collapse;
      tbody {
        .line_0 {
          display: table-row;
        }
      }
      .table_line_menu {
        color: #fff;
        background-color: #1c5367;
        .table_cell {
          text-align: left;
          font-weight: bold;
          padding: 5px 0;
          .table_cell__menu {
            display: flex;
            font-family: "SourceHanSansSC-Light";
            font-size: 1.2rem;
            font-size: calc(1.2 * 16 / 19.2 * 1vw);
            padding: 0.3rem 0;
            padding: calc(0.3 * 16 / 19.2 * 1vw) 0;
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

  .params-table__header,
  .params-table__footer {
    background-color: #1c5367;
    color: #fff;
    .table_cell {
      font-weight: bold;
      border: none;
    }
  }
}
.params-div {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  .params-div__select {
    display: flex;
    align-items: center;
    height: 51px;
    padding: 0 20% 0 15px;
    background-color: #1c5367;
  }

  // &:nth-child(2) {
  //   background-color: green;
  // }

  .params-div__block {
    display: flex;
    flex-direction: column;

    &:nth-child(2) {
      .params-div__line {
        &:nth-child(even) {
          background-color: transparent;
          border-top: 1px solid #e8e8ea;
          border-bottom: 1px solid #e8e8ea;
        }
      }
    }
    .params-div__menu {
      background-color: #1c5367;
      color: #fff;
      border-bottom: 1px solid #fff;

      .params-div__value {
        position: relative;
        text-align: right;
        &.close::after {
          transform: rotate3d(0, 0, 1, 90deg);
        }
        &::after {
          position: absolute;
          top: 0;
          right: 0;
          left: -14px;
          z-index: 10;
          width: 14px;
          height: 1px;
          background: #fff;
          content: "";
          transition: transform 0.5s;
        }

        &::before {
          position: absolute;
          top: 0;
          right: 0;
          left: -14px;
          z-index: 10;
          width: 14px;
          height: 1px;
          background: #fff;
          content: "";
        }
      }
    }

    .params-div__body {
      transition: all 0.4s ease-in-out;
      overflow: hidden;
    }

    .params-div__line {
      height: 51px;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 15px;
      &:nth-child(even) {
        background-color: #e8e8ea;
      }
      .params-div__name {
        flex: 1;
      }
      .params-div__value {
        text-align: right;
      }
    }
  }
}

.params-table__title_mobile {
  line-height: 2;
  text-align: center;
  line-height: 3.5;
}

.params-table__remark {
  width: 80%;
  margin: auto;
  margin-bottom: 10px;
}

.params-div__remark {
  padding: 0 15px;
  margin-top: 10px;
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
  .params-div {
    .params-div__select {
      padding: 0 15px 0 20%;
    }

    .params-div__block {
      .params-div__menu {
        .params-div__value {
          margin-left: 15px;
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .table-hint {
    width: 90%;
    margin: 2rem auto;
    margin: calc(2 * 16 / 3.75 * 1vw) auto;
    font-family: "SourceHanSansSC-Light";
    font-size: 0.8rem;
    font-size: calc(0.8 * 16 / 3.75 * 1vw);
    text-align: justify;
    color: #fff;
    opacity: 0.9;
  }
  .table-main {
    width: 100%;
    padding-top: 4rem;
    padding-top: calc(4 * 16 / 3.75 * 1vw);
  }
  .params-table__title {
    width: auto;
    height: auto;
    padding: 1.7333vw 1.8667vw;
    min-height: 2rem;
    min-height: calc(2 * 16 / 3.75 * 1vw);
    position: relative;
    font-family: "SourceHanSansSC-Medium";
    font-size: 1rem;
    font-size: calc(1 * 16 / 3.75 * 1vw);
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 1px;
    color: #fefefe;
    // margin: 0 0 2.5rem 2.5rem;
    margin: 0 4.5333vw 8.8vw 4.5333vw;
    .txt {
      position: unset;
      // top: 0.5rem;
      // left: 1rem;
      color: #fff;
      text-align: left;
      // width: 90%;
    }
    .img {
      width: 30rem;
      width: calc(30 * 16 / 3.75 * 1vw);
      height: auto;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
  }
  .params-table {
    width: 100%;
    margin: 0 auto 20px;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid #b2b2b298;

    td {
      padding: 0;
    }
    .line_0 {
      display: none;
    }
    .table_cell {
      padding: 0.6rem;
      padding: calc(0.6 * 16 / 3.75 * 1vw);
      text-align: center;
      border: solid 1px #b2b2b298;
      font-family: "SourceHanSansSC-Light";
      font-size: 0.9rem;
      font-size: calc(0.9 * 16 / 3.75 * 1vw);
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 1px;
      color: #fefefe;
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
      tbody {
        .line_0 {
          display: none;
        }
        .table_line {
          .table_cell:last-child {
            box-shadow: rgba(255, 255, 255, 0.3) 0px 0px 5px;
          }
        }
      }
      .table_line {
        &:nth-child(even) {
          background-color: #242726;
        }
      }
      .params-table__params {
        width: 100%;
        border-collapse: collapse;
        tbody {
          .line_0 {
            display: table-row;
          }
        }
        .table_line_menu {
          color: #fff;
          background-color: #1c5367;
          .table_cell {
            text-align: left;
            font-weight: bold;
            padding: 5px 0;
            .table_cell__menu {
              display: flex;
              font-family: "SourceHanSansSC-Medium";
              padding: 0.3rem 0;
              padding: calc(0.3 * 16 / 3.75 * 1vw) 0;
              flex-direction: row;
              align-items: center;
              min-height: 24px;
              font-size: 0.9rem;
              font-size: calc(0.9 * 16 / 3.75 * 1vw);

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

    .params-table__header,
    .params-table__footer {
      background-color: #1c5367;
      color: #fff;
      .table_cell {
        font-weight: bold;
        border: none;
      }
    }
  }
}
</style>
