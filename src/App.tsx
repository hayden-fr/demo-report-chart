import { defineComponent } from 'vue'
import ChartPie from './components/ChartPie'
import ChartRose from './components/ChartRose'
import ChartCircle from './components/ChartCircle'
import List from './components/List'
import Table from './components/Table'
import CardList from './components/CardList'
import './App.less'

export default defineComponent(function () {
  return () => {
    return (
      <div class="container">
        <el-row>
          <el-col span={8}>
            <div class="card">
              <h2>疾病分析</h2>
              <ChartPie></ChartPie>
            </div>
          </el-col>
          <el-col span={8}>
            <div class="card">
              <h2>项目类型</h2>
              <ChartRose></ChartRose>
            </div>
          </el-col>
          <el-col span={8}>
            <div class="card">
              <h2>研究单位</h2>
              <ChartCircle></ChartCircle>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col span={8}>
            <List></List>
          </el-col>
          <el-col span={16}>
            <Table></Table>
          </el-col>
        </el-row>

        <CardList></CardList>
      </div>
    )
  }
})
