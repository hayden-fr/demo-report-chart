import { Rose } from '@antv/g2plot'
import { defineComponent, onMounted, ref, unref } from 'vue'

export default defineComponent(function () {
  const container = ref()

  onMounted(() => {
    const data = [
      { type: '仿制药', value: 25 },
      { type: 'NDDS', value: 20 },
      { type: '细胞治疗', value: 18 },
      { type: '双抗', value: 16 },
      { type: '融合蛋白', value: 13 },
      { type: 'PROTAC', value: 14 },
      { type: 'iADC', value: 18 },
    ]

    const rosePlot = new Rose(unref(container), {
      data,
      xField: 'type',
      yField: 'value',
      seriesField: 'type',
      radius: 0.7,
      // label: {
      //   type: 'outer',
      //   content: '{name} {value} {percentage}',
      // },
      legend: false,
    })

    rosePlot.render()
  })

  return () => {
    return <div ref={container}></div>
  }
})
