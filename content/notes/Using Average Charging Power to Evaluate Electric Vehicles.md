---
title: Using Average Charging Power to Evaluate Electric Vehicles
date: 2021-09-02 18:00:00
---

A common metric that is used when comparing how fast electric vehicles charge is the **average charging power**. This is measured in [kilowatts][1] (kW) and is usually the average power a vehicle receives when charging from 20 to 80 percent using a DC fast charger.

Let's explore how well this metric may or may not help people understand which electric vehicles are more or less convenient to charge.

### Pro: Simple and easy to understand
A single number is used for each vehicle and the scale is linear. 200 kW is twice as fast as 100 kW. This is simple for the human mind to understand.

### Pro: Battery size does not matter
Compared to some [[Using 20 to 80 Charging Time to Evaluate Electric Vehicles|other metrics]], the size of the vehicle's battery does not matter.

Charging at 100 kW for ten minutes will result in the same amount of _energy_ being added, regardless of the battery's size and range.

### Pro: More practical when charging on road trips
Compared to the [[Using Maximum Charging Power to Evaluate Electric Vehicles|maximum charging power]], using an average when charging from 20 to 80 percent is more representative of how people will charge their vehicles while on a road trip.

Most people will stop to charge on a long trip while they eat or use the restroom. They will arrive with different states of charge and stay for different amounts of time. These will all result in different charging powers being achieved in practice. Using an average can help better represent these different scenarios.

### Con: Not familiar
Unlike [[Using 20 to 80 Charging Time to Evaluate Electric Vehicles|time]] and [[Using Range Replenishing Speed to Evaluate Electric Vehicles|distance]], power is not as familiar to many people. It can be difficult to put this metric in perspective with other concepts in our lives.

Even where power is familiar, it is hard to relate to it at this scale. An efficient light bulb may only use a few watts, but what the heck is 250 _kilowatts?

### Con: Efficiency is not taken into account
This metric does not, however, put a vehicle's _efficiency_ into account.

Two vehicles that charge at the same power for the same amount of time will have the same amount of energy added. This energy will result in a different amount of _range_ for each vehicle depending on its efficiency.

An alternative metric that does put efficiency into account is [[Using Range Replenishing Speed to Evaluate Electric Vehicles|range replenishing speed]].

### Con: Difficult to compare to other fuels
Average charging power also means nothing when comparing to how quickly an internal combustion engine (ICE) vehicle refuels.

This metric is limited to only comparing electric vehicles and not with alternative fuel vehicles such as gasoline or [fuel cell][2].

The [[Using 20 to 80 Charging Time to Evaluate Electric Vehicles|time it takes to charge from 20 to 80 percent]] and [[Using Range Replenishing Speed to Evaluate Electric Vehicles|range replenishing speed]] are easier to compare with alternative fuels.

### Con: Does not capture the complexity of charging curves
There are many variables that affect how much power an electric vehicle receives at a given time.

Some vehicles have a fairly [linear curve][3], with power being higher at a lower state of charge. Other vehicles have a [weird, non-linear curve][4] that is much less predictable. With these different curves, arriving at a charger with the same state of charge could result in very different charging experiences for different vehicles.

A simple average does not capture this complexity. I have yet to find a metric that successfully does, but perhaps there is one that exists.


[1]: https://en.wikipedia.org/wiki/Watt#Kilowatt
[2]: https://en.wikipedia.org/wiki/Fuel_cell_vehicle
[3]: https://insideevs.com/news/514857/mic-tesla-model3-srp-charging/
[4]: https://insideevs.com/news/492727/ford-mustang-mache-fast-charging-analysis/