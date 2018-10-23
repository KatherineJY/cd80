$(document).ready(function() {

  showRiskChart();
  draw_sector_chart();
});


function showRiskChart() {
  let categories = [{ name: "IT" },{ name: "C" },];
  let stock_info = [
    { id: "0", name: "stock1", value: 1, category: 0 },
    { id: "1", name: "stock2", value: 2, category: 1 },
    { id: "2", name: "stock3", value: 3, category: 1 },
    { id: "3", name: "stock4", value: 4, category: 1 },
    { id: "4", name: "stock5", value: 5, category: 1 }
  ];
  let relations = [
    { source: "0", target: "1", value:1 },
    { source: "0", target: "2", value:2 },
    { source: "0", target: "3", value:3 },
    { source: "0", target: "4", value:4 }
  ];

  stock_info.forEach((stock)=>{
      stock.symbolSize = stock.value*10;
      stock.x = Math.random()*10;
      stock.y = Math.random()*10;
  })

  relations.forEach((link)=>{
      link.lineStyle = {
              width: link.value
      };
  })

  let risk_chart = echarts.init($("#risk-chart")[0],'walden');
  option = {
    title: {
    },
    tooltip: {},
    legend: [{
        // selectedMode: 'single',
        data: categories.map(function (a) {
            return a.name;
        })
    }],
    animationDuration: 1500,
    animationEasingUpdate: 'quinticInOut',
    series : [
        {
            type: 'graph',
            layout: 'none',
            data: stock_info,
            links: relations,
            categories: categories,
            roam: true,
            focusNodeAdjacency: true,
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 1,
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                }
            },
            label: {
                position: 'right',
                formatter: '{b}'
            },
            lineStyle: {
                color: 'source',
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

function draw_sector_chart(){
    let sechor_chart = echarts.init($("#sector-chart",'walden')).setOption({
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x : 'center',
            y : 'bottom',
            data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
        },
        series: {
            type:'pie',
            radius : [30, 110],
            roseType : 'area',
            data:[
                {value:10, name:'rose1'},
                {value:5, name:'rose2'},
                {value:15, name:'rose3'},
                {value:25, name:'rose4'},
                {value:20, name:'rose5'},
                {value:35, name:'rose6'},
                {value:30, name:'rose7'},
                {value:40, name:'rose8'}
            ]
        }
    });
    
}
