<script>
    let celcius = Math.random()*50
    let fahrenheit = 32 + celcius * 9/5
    let kelvin = celcius + 273
 </script>

<h2>Fra celcius til fahrenheit </h2>
{celcius.toFixed()} grader celcius = {fahrenheit.toFixed(1)} grader fahrenheit

<h2>Fra celcius til Kelvin </h2>
{celcius.toFixed()} grader celsius = {kelvin.toFixed(1)} grader kelvin

<h2>Fra Farenheit til Kelvin </h2>
{fahrenheit.toFixed()} grader farenheit = {kelvin.toFixed(1)} grader kelvin