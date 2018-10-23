$(document).ready(function() {
  //ajax
  let send_data = "11";
 /* $.ajax({
    method: "POST",
    //url: "http://10.220.138.138:5000/get_return_rate",
    //url: "http://10.220.138.138:5000/get_risk_value",
    //url: "http://10.220.138.138:5000/get_value_volatility",
    url: "http://10.220.138.138:5000/get_expected_loss",
    
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(send_data),
    success: function(result) {
      console.log(result);
    }
  });*/

  let category = ["IT"];
  let stock_info = [
    { id: "0", name: "stock1", symbolSize: 1, category: "IT" },
    { id: "1", name: "stock2", symbolSize: 2, category: "IT" },
    { id: "2", name: "stock3", symbolSize: 3, category: "IT" },
    { id: "3", name: "stock4", symbolSize: 4, category: "IT" },
    { id: "4", name: "stock5", symbolSize: 5, category: "IT" }
  ];
  let relations = [
    { id: "0", source: "0", target: "1" },
    { id: "0", source: "2", target: "3" },
    { id: "0", source: "3", target: "1" },
    { id: "0", source: "2", target: "1" },
    { id: "0", source: "0", target: "4" },
    { id: "0", source: "1", target: "4" }
  ];
  //let relations = [[0,1,5],[2,0,7],[4,9,0]];

  //showRiskChart();
});

function showRiskChart() {
  let risk_chart = echarts.init($("#risk-chart")[0]);
  risk_chart.hideLoading();
  let option = {
    tooltip: {},
    legend: [
      {
        selectedMode: "single",
        data: categories.map(function(a) {
          return a;
        })
      }
    ],
    animationDuration: 1500,
    animationEasingUpdate: "quinticInOut",
    series: [
      {
        name: "Les Miserables",
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
