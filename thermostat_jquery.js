$(document).ready(function() {
  var thermostat = new Thermostat();

  function updateTemperature() {
    $("#temperature").text(thermostat.temperature);
    $("#temperature").attr("class", thermostat.temperatureDisplay());
  }

  function updatePowerSavingMode() {
    $("#powersaving-status").text(thermostat.powerSavingMode);
  }

  function cityTemperature() {
    var city = $("#cities").val();
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var format = '&units=metric';
    var token = '&appid=2de143494c0b295cca9337e1e96b00e0';
    $.get(url + city + format + token, function(data){
      $("#current-temperature").text(data.main.temp.toFixed(0));
    });
  }

  updateTemperature();
  updatePowerSavingMode();
  cityTemperature();

  $("#cities").change(function() {
    cityTemperature();
  });

  $("#temperature-up").click(function() {
    thermostat.upButton();
    updateTemperature();
  });

  $("#temperature-down").click(function(){
    thermostat.downButton();
    updateTemperature();
  });

  $("#temperature-reset").click(function(){
    thermostat.reset();
    updateTemperature();
  });

  $("#powersaving-on").click(function(){
    thermostat.powerSavingModeOn();
    updateTemperature();
    updatePowerSavingMode();
  });

  $("#powersaving-off").click(function(){
    thermostat.powerSavingModeOff();
    updatePowerSavingMode();
  });
});
