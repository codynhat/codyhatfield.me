---
title: An Additional ICE Passenger
date: 2020-05-25 12:22:03
tags:
---


I have come across several scenarios where I have a choice between riding as a passenger in an ICE (internal combustion engine) car or driving myself in my EV (electric vehicle). A question that has been in my head is which of these would result in lower carbon emissions?

1. Riding as an additional passenger in an ICE car; OR
2. Driving alone in an EV

Let's do some quick math to try and come up with an estimate.

## Carbon Emissions From an Additional ICE Passenger

The key word here is *additional*. The vehicle is assumed to be driving no matter if I am in it or not. So how much carbon emissions results from the *additional weight* I would add to the car? First, some assumptions:

* Fuel efficiency of the vehicle is 24 MPG <sup id="fnr1">[1]</sup>
* 8.89 kg of CO2 emitted per gallon of gasoline <sup id="fnr2">[2]</sup>
* Every 100 pounds (45 kg) of additional weight reduces MPG by 1% <sup id="fnr3">[3]</sup>

### Carbon emissions without a passenger

We can first calculate how much emissions that car would have if I was not riding in it.

```
1/24 gallons per mile * 8.89 = 0.370 kg of CO2 per mile
```

### Carbon emissions with a passenger

Then, we can calculate how much emissions it would have if I **was** riding in it.

```
24 MPG * (1 - 0.01)^(68 kg / 45) = 23.638
1/23.638 gallons per mile * 8.89 = 0.376 kg of CO2 per mile
```

### Marginal carbon emissions from passenger

The difference between those is the *additional* carbon emissions.

```
0.376 - 0.370 = 0.006 kg of CO2 per mile
```

## Carbon Emissions From an EV

Now let's compare that to the carbon emissions from driving an EV by myself, with no other passengers. The key point here is that this car is assumed to **not** be on the road if I choose to carpool with the ICE car. So we will take the entire car's weight into consideration.

Since EVs do not emit any carbon emissions directly, we will compare the carbon emissions from the electricity grid that is used to charge the car.

### How much electricity is used?

The lifetime efficiency of my Tesla Model 3 Long Range AWD is around `0.257 kWh/mile` (kWh -> kilowatt hours, the same unit that is shown as the usage on your electricity bill). The vast majority of miles are from me driving by myself with no additional weight, so this seems like a good number to use.

### Carbon emissions from electricity grid

This is the tricky one. The answer here depends on where you get your electricity from. The amount of emissions varies quite drastically depending on the geographic region, so we will look at multiple examples.<sup id="fnr4">[4]</sup>

The first example is my home state of Washington<sup id="fnr5">[5]</sup>, which emits a total of `0.089 kg of CO2 per kWh`.
```
0.089 * 0.257 kWh/mile = 0.023 kg of CO2 per mile
```

## Answer: It Depends

So what results in more carbon emissions? In this case, it depends greatly on where your electricity is coming from. As you can see in the chart below, there are plenty of countries where riding in the ICE car has less emissions, and also some countries where riding in the EV has less emissions. There is even Iceland, which emits **zero** carbon emissions from electricity generation.

<canvas id="data" height="400em"></canvas><a href="data.csv" style="font-size: x-small;">Raw Data</a>


<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
<script src="https://cdn.jsdelivr.net/npm/xlsx@0.16.0/dist/xlsx.min.js" integrity="sha256-j6s13sDrFq3WpEWL4C1sbm+gb3CbknDfDCg7tJ26Qv0=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datasource@0.1.0"></script>

<script>
    var ctx = document.getElementById('data').getContext('2d');
    var colors = [];
    for (let i = 0; i < 24; i++) {
        colors.push('#2aa198');
    }
    colors[4] = '#d33682';
    colors[23] = '#d33682';
    var tColor = window.getComputedStyle(document.getElementsByTagName("body")[0]).color;
    Chart.defaults.global.defaultFontColor = tColor;
    var chart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: [],
            datasets: [
                {
                    label: 'kg of CO2 per mile',
                    backgroundColor: colors,
                    borderColor: '#2aa198'
                }
            ]
        },
        plugins: [ChartDataSource],
        options: {
            title: {
                display: true,
                text: 'EV Emissions vs An Additional ICE Passenger',
                fontSize: 18,
                padding: 30
            },
            legend: {
                display: false
            },
            plugins: {
                datasource: {
                    url: 'data.csv',
                    rowMapping: 'index',
                    datasetLabels: 'Sheet1!C1:C1',
                    indexLabels: 'Sheet1!A2:A25',
                    data: 'Sheet1!C2:C25'
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    stacked: true
                }],
                yAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    stacked: true
                }]
            }
        }
    });
</script>

## My Take

As time goes on, all these countries will start to move further down on this chart as they transition to renewable energy, without EVs needing to change anything. Meanwhile, the ICE car will not be emitting any less emissions in the future than it did on its first mile.


***

<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item">
    <p>Taken from the <a href="https://afdc.energy.gov/data/10310">average fuel economy</a> of a typical US car
    <a href="#fnr1" class="footnote-backref">↩</a></p>
</li>
<li id="fn2" class="footnote-item">
    <p><a href="https://www.eia.gov/environment/emissions/co2_vol_mass.php">https://www.eia.gov/environment/emissions/co2_vol_mass.php</a>
    <a href="#fnr2" class="footnote-backref">↩</a></p>
</li>
<li id="fn3" class="footnote-item">
    <p><a href="https://www.fueleconomy.gov/feg/driveHabits.jsp">https://www.fueleconomy.gov/feg/driveHabits.jsp</a>
    <a href="#fnr3" class="footnote-backref">↩</a></p>
</li>
<li id="fn4" class="footnote-item">
    <p>All these examples use data from <a href="https://www.carbonfootprint.com/docs/2019_06_emissions_factors_sources_for_2019_electricity.pdf">Carbon Footprint</a>, which aggregates data from various global sources.
    <a href="#fnr4" class="footnote-backref">↩</a></p>
</li>
<li id="fn5" class="footnote-item">
    <p>Most of my electricity comes from <a href="https://www.seattle.gov/light/greenest/cleanhydro.asp">Seattle City Light</a>, which is far cleaner than the rest of the state and country. I could not easily find data to use on Seattle City Light, so I stuck with the entire state of Washington.
    <a href="#fnr5" class="footnote-backref">↩</a></p>
</li>
</ol>
</section>

[1]: #fn1
[2]: #fn2
[3]: #fn3
[4]: #fn4 
[5]: #fn5


