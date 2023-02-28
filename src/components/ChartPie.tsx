import { Pie } from '@antv/g2plot'
import { defineComponent, onMounted, ref, unref } from 'vue'

export default defineComponent(function () {
  const container = ref()

  onMounted(() => {
    const data = [
      { type: '肠外营养', value: 38 },
      { type: '心脑血管', value: 28 },
      { type: '男女专科', value: 20 },
      { type: '骨质疏松', value: 10 },
      { type: '细菌感染', value: 6 },
    ]

    const piePlot = new Pie(unref(container), {
      appendPadding: 10,
      data,
      angleField: 'value',
      colorField: 'type',
      radius: 0.6,
      label: {
        type: 'outer',
        content: '{name} {percentage}',
      },
      legend: false,
      interactions: [{ type: 'element-active' }],
    })

    piePlot.render()
  })

  return () => {
    return <div ref={container}></div>
  }
})
