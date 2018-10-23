$(document).ready(function() {
  showRiskChart();
  draw_sector_chart();
  fetch_data_and_draw_chart("get_return_rate","#return-chart","send_data");
});

function showRiskChart() {
  let categories = [{ name: "IT" }, { name: "C" }];
  let stock_info = [
    { id: "0", name: "stock1", value: 1, category: 0 },
    { id: "1", name: "stock2", value: 2, category: 1 },
    { id: "2", name: "stock3", value: 3, category: 1 },
    { id: "3", name: "stock4", value: 4, category: 1 },
    { id: "4", name: "stock5", value: 5, category: 1 }
  ];
  let relations = [
    { source: "0", target: "1", value: 1 },
    { source: "0", target: "2", value: 2 },
    { source: "0", target: "3", value: 3 },
    { source: "0", target: "4", value: 4 }
  ];

  stock_info.forEach(stock => {
    stock.symbolSize = stock.value * 10;
    stock.x = Math.random() * 10;
    stock.y = Math.random() * 10;
  });

  relations.forEach(link => {
    link.lineStyle = {
      width: link.value
    };
  });

  let risk_chart = echarts.init($("#risk-chart")[0], "walden");
  option = {
    title: {},
    tooltip: {},
    legend: [
      {
        // selectedMode: 'single',
        data: categories.map(function(a) {
          return a.name;
        })
      }
    ],
    animationDuration: 1500,
    animationEasingUpdate: "quinticInOut",
    series: [
      {
        type: "graph",
        layout: "none",
        data: stock_info,
        links: relations,
        categories: categories,
        roam: true,
        focusNodeAdjacency: true,
        itemStyle: {
          normal: {
            borderColor: "#fff",
            borderWidth: 1,
            shadowBlur: 10,
            shadowColor: "rgba(0, 0, 0, 0.3)"
          }
        },
        label: {
          position: "right",
          formatter: "{b}"
        },
        lineStyle: {
          color: "source",
          curveness: 0.3
        },
        emphasis: {
          lineStyle: {
            width: 10
          }
        }
      }
    ]
  };
  risk_chart.setOption(option);
}

function draw_sector_chart() {
  let sechor_chart = echarts.init($("#sector-chart")[0], "walden").setOption({
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        type: "pie",
        radius: "55%",
        center: ["50%", "50%"],
        data: [
          { value: 335, name: "IT" },
          { value: 310, name: "Fiance" },
          { value: 274, name: "Real State" },
          { value: 235, name: "Agriculture" },
          { value: 400, name: "Industry" }
        ].sort(function(a, b) {
          return a.value - b.value;
        }),
        roseType: "radius",
        label: {
          normal: {
            textStyle: {
                color: "rgba(0,0,0,0.6)"
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: "rgba(0,0,0,0.3)"
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          }
        },
        itemStyle: {
          normal: {
            color: "#063960",
 
          }
        },

        animationType: "scale",
        animationEasing: "elasticOut",
        animationDelay: function(idx) {
          return Math.random() * 200;
        }
      }
    ]
  });
}

function fetch_data_and_draw_chart(api, chart_id, send_data) {
    let returnData = null;
  $.ajax({
    method: "POST",
    url: "http://10.220.138.138:5000/" + api,
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(send_data),
    success: function(result) {
        draw_chart(chart_id,result);
    }
  });
}

function draw_chart(chart_id, result) {
    let chart = echarts
      .init($(chart_id)[0], "walden")
      .setOption({
        xAxis: {
          type: "category"
        },
        yAxis: {
          type: "value",
          min: 'dataMin',
          max: 'dataMax'
        },
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: 50
          },
          {
            start: 0,
            end: 10,
            handleIcon:
              "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
            handleSize: "80%",
            handleStyle: {
              color: "#fff",
              shadowBlur: 3,
              shadowColor: "rgba(0, 0, 0, 0.6)",
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
          }
        ],
        series: [
          {
            type: "line",
            smooth: true,
            symbol: "none",
            sampling: "average",
            data: result
          }
        ]
      });
  }


