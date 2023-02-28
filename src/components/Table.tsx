import { defineComponent } from 'vue'

export default defineComponent(function () {
  const tableData = [
    { stage: '仿制药', field1: 5 },
    { stage: '口服一致性评价', field1: 6 },
    { stage: '注射剂一致性评价', field1: 7, field3: 38 },
    { stage: '国际仿制', field1: 9, field2: 4, field5: 47 },
    { stage: 'NDDS', field1: 6 },
    { stage: '改良创新', field1: 5 },
    { stage: '其他（辅料、中间体、包材）', field1: 5 },
    { stage: '细胞治疗', field1: 4, field2: 3 },
    { stage: '小分子', field1: 4 },
  ]

  return () => {
    return (
      <div class="landmark-table">
        <h2>里程碑阶段</h2>
        <el-table data={tableData}>
          <el-table-column
            prop="stage"
            label="里程碑阶段"
            width="120px"
          ></el-table-column>
          <el-table-column prop="field1" label="立项评估"></el-table-column>
          <el-table-column prop="field2" label="立项验证"></el-table-column>
          <el-table-column prop="field3" label="药物发现"></el-table-column>
          <el-table-column
            prop="field4"
            label="药物临床前开发"
          ></el-table-column>
          <el-table-column prop="field5" label="CMC(药学)"></el-table-column>
          <el-table-column prop="field6" label="非注册临床"></el-table-column>
          <el-table-column prop="field7" label="小试"></el-table-column>
          <el-table-column prop="field8" label="中试"></el-table-column>
          <el-table-column prop="field9" label="工艺验证"></el-table-column>
          <el-table-column prop="field10" label="药理毒理"></el-table-column>
          <el-table-column prop="field11" label="IND申报"></el-table-column>
          <el-table-column prop="field12" label="BE阶段"></el-table-column>
          <el-table-column prop="field13" label="临床Ⅰ期"></el-table-column>
          <el-table-column prop="field14" label="临床Ⅱ期"></el-table-column>
          <el-table-column prop="field15" label="临床Ⅲ期"></el-table-column>
          <el-table-column prop="field16" label="申报生产"></el-table-column>
          <el-table-column prop="field17" label="批产上市"></el-table-column>
        </el-table>
      </div>
    )
  }
})
