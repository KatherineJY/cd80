$(document).ready(function() {
  //ajax
  let send_data = "11";
  fetch_data_and_draw_chart("get_return_rate","#return-chart",send_data);
  fetch_data_and_draw_chart("get_risk_value","#risk-chart",send_data);
  fetch_data_and_draw_chart("get_value_volatility","#value-chart",send_data);
  fetch_data_and_draw_chart("get_expected_loss","#loss-chart",send_data);
});

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
