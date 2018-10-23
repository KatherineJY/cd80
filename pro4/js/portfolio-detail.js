$(document).ready(function() {
  showRiskChart();
  draw_sector_chart();
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
