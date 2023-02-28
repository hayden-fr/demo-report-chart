import { defineComponent } from 'vue'

export default defineComponent(function () {
  return () => {
    return (
      <div class="card-list-container">
        <h2>仿制药（7）</h2>
        <div class="content">
          {[1, 2].map(() => {
            return (
              <el-row gutter={16}>
                {Array.from({ length: 6 }).map(() => {
                  return (
                    <el-col span={4}>
                      <div class="card-item">
                        <div class="head"></div>
                        <div class="name">A154</div>
                        <div class="info">
                          <span>仿制药</span>
                          <span>第一梯队</span>
                        </div>
                        <div class="date">2019-1-1</div>
                      </div>
                    </el-col>
                  )
                })}
              </el-row>
            )
          })}
        </div>
      </div>
    )
  }
})
