# Aether
  A visualization of Earth's winds

## MVP

* Map of Earth that can be moved around and zoomed in and out on.
* The Earths winds are visualized on the map with their velocity.
* The winds are displayed using data fetched on each refresh.
* Production README

## Wireframes
The app will be a single page with the map displayed in the center, Aether will be 
written at the top and any filters (see Bonus features) off to the right of the map.
All nav links will be at the bottom, centered.




                                         Main Title

            |                                                                 |
            |                                                                 |
            |                                                                 |
            |                                                                 |             
            |                               map                               |       |         |
            |                                                                 |       | Filters |
            |                                                                 |       |         |
            |                                                                 |
            |                                                                 |
            |                                                                 |

 
                                         Nav Links




## Architecture and Technologies
* Javascript
* HTML Canvas 2D API
* CSS
* webpack
* [US Weather Service API](https://nomads.ncep.noaa.gov/)
* [Change data from GRIB to JSON](https://confluence.ecmwf.int//display/GRIB/Releases)
* alternative [use GeoJSON for data](https://www.weather.gov/documentation/services-web-api)

## RoadMap

Day 1
Setup apis, setup basic map with Canvas. Learn basics of Canvas.
  * Have map on canvas with zoom functionality
  * Have wind data
  * Have framework for color map based on wind speeds
  
Day 2
Build out color map based on wind speeds and begin particle generation. Bonus: user color map to build sphere.
  * Visualization has map layer and color layer
  * particles present on map to show wind
  
Day 3
Animate map with winds.
 * wind particles 'move' with line drawn from one frame to the next
 * random particles generated to prevent map from looking empty
 
Day 4
Add interaction with set of parameters to the right of map for user to manipulate and change visualization. Make map a sphere
 * User can manipulate particle count
 * User can manipulate frame speed
 * User can manipulate line thickness for wind
 * Map is a sphere
 
 Day 5
 Cleanup bugs, if time permits add on new data type with visualization - temperature
  * User can see temperature of any point on map
  * Refactor code
 

## Bonus Features
* The map is a sphere backlite by the sun.
* User can filter by wind or temperature.
* User can change visualization of winds.
