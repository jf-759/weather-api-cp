Web Development Project 5 - Weather Dashboard

Submitted by: Jane Fernandez

This web app: displays the current weather for multiple U.S. cities using the Weatherbit API. Users can search for cities and filter them by temperature ranges. Summary statistics such as average, median, and hottest temperatures are displayed.

Time spent: ~10 hours spent in total

Required Features

The following required functionality is completed:

 The site has a dashboard displaying a list of data fetched using an API call

The dashboard displays 12 U.S. cities, one per row

Each row shows city name, temperature, weather description, and humidity

 useEffect React hook and async/await are used

 The app dashboard includes at least three summary statistics about the data

Total number of cities displayed

Average temperature of all displayed cities

Median temperature

Hottest city and its temperature

 A search bar allows the user to search for an item in the fetched data

The search bar filters cities by name

The dashboard updates dynamically as the user types

 An additional filter allows the user to restrict displayed items by specified categories

Temperature filter allows restricting cities to ranges like <60°F, 60-80°F, >80°F

The dashboard updates dynamically when the temperature filter is changed

The following optional features are implemented:

 Multiple filters can be applied simultaneously (search + temperature)

 Filters use different input types

Text input for search

Dropdown selection for temperature ranges

The following additional features are implemented:

 Loading and error states displayed while fetching API data

 Dark/light styling toggled based on Tailwind CSS classes

 Sortable temperatures could be added in the future

Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://imgur.com/a/oE5NPvm' title='Video Walkthrough' width='' alt='Video Walkthrough' />



Notes

The main challenge was handling API rate limits from Weatherbit (429 errors) and ensuring the app didn’t crash if data failed to load

Added delays in API calls and error handling to mitigate this

Added guards in Stats and WeatherTable components to prevent crashes on empty or undefined data

License
Copyright 2025 Jane Fernandez

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.