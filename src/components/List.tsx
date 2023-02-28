import { defineComponent } from 'vue'

export default defineComponent(function () {
  const tableData = [
    {
      process: '已立项',
      count: 35,
      proportion: '35%',
      wow: '+10%',
    },
    {
      process: '实施中',
      count: 25,
      proportion: '25%',
      wow: '+10%',
    },
    {
      process: '已完成',
      count: 20,
      proportion: '20%',
      wow: '-10%',
    },
    {
      process: '已暂停',
      count: 15,
      proportion: '15%',
      wow: '-10%',
    },
    {
      process: '已终止',
      count: 5,
      proportion: '5%',
      wow: '+10%',
    },
    {
      process: '已驳回',
      count: 50,
      proportion: '4%',
      wow: '+10%',
    },
  ]

  return () => {
    return (
      <div class="process-list">
        <h2>项目进度</h2>
        <el-table data={tableData} size="middle">
          <el-table-column prop="process" label="进度" width="80px" />
          <el-table-column prop="count" label="数量" width="60px" />
          <el-table-column prop="proportion" label="占比" width="60px" />
          <el-table-column prop="proportion" label="">
            {(scope: any) => {
              return (
                <el-progress
                  percentage={parseFloat(scope.row.proportion)}
                  format={() => ''}
                />
              )
            }}
          </el-table-column>
          <el-table-column prop="wow" label="同比上周" width="100px">
            {(scope: any) => {
              const value = scope.row.wow
              return (
                <span
                  style={{ color: value.startsWith('+') ? 'green' : 'red' }}
                >
                  {scope.row.wow}
                </span>
              )
            }}
          </el-table-column>
        </el-table>
      </div>
    )
  }
})
