import { Pie } from '@antv/g2plot'
import { defineComponent, onMounted, ref, unref } from 'vue'

export default defineComponent(function () {
  const container = ref()

  onMounted(() => {
    const data = [
      { type: '天津分院', value: 36 },
      { type: '成都总院', value: 20 },
      { type: '苏州分院', value: 16 },
      { type: '科伦博泰', value: 10 },
      { type: '美国分院', value: 30 },
      { type: '广西科伦', value: 9 },
    ]

    const piePlot = new Pie(unref(container), {
      appendPadding: 0,
      data,
      angleField: 'value',
      colorField: 'type',
      radius: 0.6,
      innerRadius: 0.56,
      label: false,
      statistic: {
        title: false,
        content: {
          style: {
            whiteSpace: 'pre-wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontSize: '14px',
          },
          content: '15\n研究单位（家）',
        },
      },
    })

    piePlot.render()
  })

  return () => {
    return <div ref={container}></div>
  }
})
