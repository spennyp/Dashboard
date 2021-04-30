# Homepage dashboard

The goal of this project is to build a light weight homepage/new tab page dashboard displaying information that is important to me. 
It is intended to be a lightweight, cross browser replacement for browser extensions line momentum.

The original version of this dashboard was built in HTML, CSS and JS.
This is the reacreation in ReactJS (in an effort to learn React).

It is hosted at [https://www.spencerperkins.me/Dashboard](https://www.spencerperkins.me/Dashboard/?lat=49.25&long=-123.11&name=YOUR_NAME)

## Key features
* New background image everytime you visit
* Greeting message 
* Duckduckgo search bar
* Calendar 
* Time
* Weather
* Ethereum gas price

## URL Parameters
This page takes 3 optional url parameters:
* lat: latitude of the location you want to display the weather for 
* long: longitude of the location you want to display the weather for 
* name: the name you want to appear in the greeting message

## API's used
* [openweathermap](https://openweathermap.org/api): used to fetch the weather
* [gasnow](https://taichi.network/): used to fetch the current ethereum gas price
* [upsplash](https://unsplash.com/developers): used to fetch the background images


## To deploy new changes
```sh
npm run deploy
```
