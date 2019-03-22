const labelOption = {
  show: true,
  position: "insideBottom",
  distance: 15,
  align: "left",
  verticalAlign: "middle",
  rotate: 90,
  formatter: "{c}  {name|{a}}",
  fontSize: 12,
  rich: {
    name: {
      textBorderColor: "#fff"
    }
  }
};

const dom = document.getElementById("app");
const myChart = echarts.init(dom);

function getNumber() {
  return Number((Math.random() * 100).toFixed(2));
}

setInterval(() => {
  myChart.setOption({
    color: ["#003366", "#e5323e"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    legend: {
      data: ["CPU", "MEMORY"]
    },
    xAxis: [
      {
        type: "category",
        axisTick: { show: false },
        data: ["101", "102", "103"]
      }
    ],
    yAxis: [
      {
        name: "使用占比(%)",
        type: "value",
        max: 100
      }
    ],
    series: [
      {
        name: "CPU",
        type: "bar",
        barGap: 0,
        label: labelOption,
        data: [getNumber(), getNumber(), getNumber()]
      },
      {
        name: "MEMORY",
        type: "bar",
        label: labelOption,
        data: [getNumber(), getNumber(), getNumber()]
      }
    ]
  });
}, 1000);
