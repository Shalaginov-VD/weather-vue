(function(){"use strict";var e={7379:function(e,t,i){var n=i(5130),r=i(6768),a=i(4232),s="data:image/png;base64,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";const o={value:""},l={value:"ekb"},c={value:"msk"},u={value:"ntagil"},m={key:0},h={key:1},d=["src"],g={class:"user-favorites"};function C(e,t,i,C,v,f){const p=(0,r.g2)("UserFavorites"),w=(0,r.g2)("weather-forecast");return(0,r.uX)(),(0,r.CE)(r.FK,null,[t[9]||(t[9]=(0,r.Lk)("img",{alt:"Vue logo",src:s},null,-1)),t[10]||(t[10]=(0,r.Lk)("br",null,null,-1)),(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>v.selectedCity=e),onChange:t[1]||(t[1]=(...e)=>f.fetchWeather&&f.fetchWeather(...e))},[(0,r.Lk)("option",o,(0,a.v_)(e.$t("selectCity")),1),(0,r.Lk)("option",l,(0,a.v_)(e.$t("cities.ekb")),1),(0,r.Lk)("option",c,(0,a.v_)(e.$t("cities.msk")),1),(0,r.Lk)("option",u,(0,a.v_)(e.$t("cities.ntagil")),1)],544),[[n.u1,v.selectedCity]]),(0,r.Lk)("h1",null,(0,a.v_)(e.$t("weather"))+" "+(0,a.v_)(v.selectedCityName),1),(0,r.Lk)("div",null,[v.weather?v.weather?((0,r.uX)(),(0,r.CE)("h3",h,[(0,r.eW)((0,a.v_)(e.$t("now"))+" "+(0,a.v_)(v.weather["main"]["temp"])+" "+(0,a.v_)(e.$t("temperature"))+", ",1),t[5]||(t[5]=(0,r.Lk)("br",null,null,-1)),(0,r.eW)(" "+(0,a.v_)(e.$t(`weatherDesc.${v.weather.weather[0].description.replace(/ /g,"_")}`))+" ",1),(0,r.Lk)("img",{src:`http://openweathermap.org/img/wn/${v.weather.weather[0].icon}.png`,alt:"weather icon"},null,8,d),t[6]||(t[6]=(0,r.Lk)("br",null,null,-1)),(0,r.eW)(" "+(0,a.v_)(v.weather["main"]["pressure"])+" "+(0,a.v_)(e.$t("pressure")),1),t[7]||(t[7]=(0,r.Lk)("br",null,null,-1)),(0,r.eW)(" "+(0,a.v_)(v.weather["main"]["humidity"])+"% "+(0,a.v_)(e.$t("humidity")),1),t[8]||(t[8]=(0,r.Lk)("br",null,null,-1)),(0,r.eW)(" "+(0,a.v_)(v.weather["wind"]["speed"])+" "+(0,a.v_)(e.$t("windSpeed"))+" "+(0,a.v_)(f.getWindDirection(v.weather["wind"]["deg"]))+" "+(0,a.v_)(e.$t("windDirection")),1)])):(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("h3",m,(0,a.v_)(e.$t("loading")),1)),v.selectedCity?((0,r.uX)(),(0,r.CE)("button",{key:2,onClick:t[2]||(t[2]=(...e)=>f.toggleUnits&&f.toggleUnits(...e))},(0,a.v_)(v.metrics)+" °",1)):(0,r.Q3)("",!0),v.selectedCity?((0,r.uX)(),(0,r.CE)("button",{key:3,onClick:t[3]||(t[3]=(...e)=>f.saveCity&&f.saveCity(...e))},(0,a.v_)(f.isCitySaved?e.$t("removeFromFavorites"):e.$t("saveToFavorites"))+" "+(0,a.v_)(e.$t("favorite")),1)):(0,r.Q3)("",!0),(0,r.Lk)("button",{onClick:t[4]||(t[4]=(...e)=>f.toggleLanguage&&f.toggleLanguage(...e))},(0,a.v_)("en"===e.currentLanguage?"RU":"EN"),1),(0,r.Lk)("div",g,[v.favoriteCities.length?((0,r.uX)(),(0,r.Wv)(p,{key:0,cities:v.favoriteCities,onRemoveCity:f.removeCity},null,8,["cities","onRemoveCity"])):(0,r.Q3)("",!0)])]),v.selectedCity?((0,r.uX)(),(0,r.Wv)(w,{key:0,city:v.selectedCity,metrics:v.metrics},null,8,["city","metrics"])):(0,r.Q3)("",!0)],64)}i(4114);const v={key:0},f=["src"],p={key:1};function w(e,t,i,n,s,o){return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.Lk)("h1",null,(0,a.v_)(e.$t("forecast")),1),s.forecast?((0,r.uX)(),(0,r.CE)("h3",v,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.forecast.list,(i=>((0,r.uX)(),(0,r.CE)("h3",{key:i.dt},[(0,r.eW)((0,a.v_)(o.formatDate(1e3*i.dt))+": "+(0,a.v_)(o.convertTemp(i.main.temp))+" "+(0,a.v_)(e.$t("temperature")),1),t[0]||(t[0]=(0,r.Lk)("br",null,null,-1)),(0,r.eW)(" "+(0,a.v_)(e.$t(`weatherDesc.${i.weather[0].description.replace(/ /g,"_")}`))+" ",1),(0,r.Lk)("img",{src:`http://openweathermap.org/img/wn/${i.weather[0].icon}.png`,alt:"weather icon"},null,8,f),t[1]||(t[1]=(0,r.Lk)("br",null,null,-1)),(0,r.eW)(" "+(0,a.v_)(i.main.pressure)+" "+(0,a.v_)(e.$t("pressure")),1),t[2]||(t[2]=(0,r.Lk)("br",null,null,-1)),(0,r.eW)(" "+(0,a.v_)(i.main.humidity)+"% "+(0,a.v_)(e.$t("humidity")),1),t[3]||(t[3]=(0,r.Lk)("br",null,null,-1)),(0,r.eW)(" "+(0,a.v_)(i.wind.speed)+" "+(0,a.v_)(e.$t("windSpeed"))+" "+(0,a.v_)(o.getWindDirection(i.wind.deg))+" "+(0,a.v_)(e.$t("windDirection")),1)])))),128))])):((0,r.uX)(),(0,r.CE)("h3",p,(0,a.v_)(e.$t("loading")),1))])}var y={name:"WeatherForecast",props:{city:String,metrics:String},data(){return{forecast:null}},created(){this.fetchForecast()},watch:{city:{immediate:!0,handler(){this.fetchForecast()}},metrics:{immediate:!0,handler(){this.forecast&&this.forecast.list.forEach((e=>{e.main.temp=this.convertTemp(e.main.temp)}))}}},methods:{fetchForecast(){const e={ekb:{lat:56.8519,lon:60.6122},msk:{lat:55.7522,lon:37.6156},ntagil:{lat:57.9194,lon:59.965}},{lat:t,lon:i}=e[this.city];fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${t}&lon=${i}&appid=7d44d3f288627d47a09f48d8806ed066&units=metric`).then((e=>e.json())).then((e=>{const t=[];e.list.forEach((e=>{const i=new Date(1e3*e.dt).toLocaleDateString();t.some((e=>e.date===i))||t.push({date:i,data:e})})),this.forecast={list:t.map((e=>e.data))}}))},formatDate(e){return new Date(e).toLocaleDateString()},getWindDirection(e){const t=["N","NE","E","SE","S","SW","W","NW"],i=Math.round(e/45)%8,n=t[i];return this.$t(`windDirections.${n}`)},convertTemp(e){return"C"===this.metrics?e.toFixed(2):(9*e/5+32).toFixed(2)}}},A=i(1241);const F=(0,A.A)(y,[["render",w]]);var E=F;const U={class:"favorites"},k=["onClick"];function D(e,t,i,n,s,o){return(0,r.uX)(),(0,r.CE)("div",U,[(0,r.Lk)("h2",null,(0,a.v_)(e.$t("favorites")),1),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.cities,(t=>((0,r.uX)(),(0,r.CE)("h3",{key:t},[(0,r.eW)((0,a.v_)(o.getCityName(t))+" ",1),(0,r.Lk)("button",{onClick:i=>e.$emit("removeCity",t)},(0,a.v_)(e.$t("delete")),9,k)])))),128))])}var j={props:{cities:{type:Array,required:!0}},methods:{getCityName(e){return this.$t(`cities.${e}`)}}};const b=(0,A.A)(j,[["render",D]]);var T=b,J={name:"App",components:{WeatherForecast:E,UserFavorites:T},data(){return{selectedCity:"",selectedCityName:"",weather:null,metrics:"C",favoriteCities:this.loadFavorites(),cities:{ekb:{name:"Екатеринбург",lat:56.8519,lon:60.6122},msk:{name:"Москва",lat:55.7522,lon:37.6156},ntagil:{name:"Нижний Тагил",lat:57.9194,lon:59.965}}}},computed:{isCitySaved(){return this.favoriteCities.includes(this.selectedCity)}},methods:{fetchWeather(){if(this.selectedCity){this.selectedCityName=this.$t(`cities.${this.selectedCity}`);const{lat:e,lon:t}=this.cities[this.selectedCity];fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${t}&appid=7d44d3f288627d47a09f48d8806ed066&units=metric`).then((e=>e.json())).then((e=>{this.weather=e}))}},getWindDirection(e){const t=["N","NE","E","SE","S","SW","W","NW"],i=Math.round(e/45)%8,n=t[i];return this.$t(`windDirections.${n}`)},toggleUnits(){this.metrics="C"===this.metrics?"F":"C",this.weather&&("C"===this.metrics?this.weather.main.temp=parseFloat((5*(this.weather.main.temp-32)/9).toFixed(2)):this.weather.main.temp=parseFloat((9*this.weather.main.temp/5+32).toFixed(2)))},toggleLanguage(){this.currentLanguage="en"===this.currentLanguage?"ru":"en",this.$i18n.locale=this.currentLanguage,this.selectedCityName=this.$t(`cities.${this.selectedCity}`)},saveCity(){this.isCitySaved?this.favoriteCities=this.favoriteCities.filter((e=>e!==this.selectedCity)):this.favoriteCities.push(this.selectedCity),this.saveFavorites(this.favoriteCities)},saveFavorites(e){localStorage.setItem("favoriteCities",JSON.stringify(e))},loadFavorites(){const e=localStorage.getItem("favoriteCities");return e?JSON.parse(e):[]},removeCity(e){this.favoriteCities=this.favoriteCities.filter((t=>t!==e)),this.saveFavorites(this.favoriteCities)}}};const K=(0,A.A)(J,[["render",C]]);var S=K,W=i(5931);const H={en:{selectCity:"Select City",weather:"Weather",loading:"Loading...",now:"Now",temperature:"degrees",pressure:"hPa pressure",humidity:"humidity",windSpeed:"m/s wind speed",windDirection:"direction",saveToFavorites:"Save",removeFromFavorites:"Remove",favorite:"to favorite",favorites:"Favorite Cities",delete:"Delete",forecast:"Weather Forecast",cities:{ekb:"Yekaterinburg",msk:"Moscow",ntagil:"Nizhny Tagil"},weatherDesc:{few_clouds:"few clouds",scattered_clouds:"scattered clouds",broken_clouds:"broken clouds",overcast_clouds:"overcast clouds",clear_sky:"clear sky",light_rain:"light rain",moderate_rain:"moderate rain",light_snow:"light show"},windDirections:{N:"N",NE:"NE",E:"E",SE:"SE",S:"S",SW:"SW",W:"W",NW:"NW"}},ru:{selectCity:"Выберите город",weather:"Погода",loading:"Загрузка...",now:"Сейчас",temperature:"градусов",pressure:"гПа давления",humidity:"влажности",windSpeed:"м/с скорость ветра",windDirection:"направление",saveToFavorites:"Сохранить",removeFromFavorites:"Убрать",favorite:"избранное",favorites:"Избранные города",delete:"Удалить",forecast:"Прогноз погоды",cities:{ekb:"Екатеринбург",msk:"Москва",ntagil:"Нижний Тагил"},weatherDesc:{few_clouds:"малооблачно",scattered_clouds:"облачно с прояснениями",broken_clouds:"переменная облачность",overcast_clouds:"пасмурно",clear_sky:"ясно",light_rain:"небольшой дождь",moderate_rain:"умеренный дождь",light_snow:"небольшой снег"},windDirections:{N:"С",NE:"СВ",E:"В",SE:"ЮВ",S:"Ю",SW:"ЮЗ",W:"З",NW:"СЗ"}}},R=(0,W.hU)({locale:"ru",messages:H});var N=R;(0,n.Ef)(S).use(N).mount("#app")}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,i),a.exports}i.m=e,function(){var e=[];i.O=function(t,n,r,a){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],a=e[u][2];for(var o=!0,l=0;l<n.length;l++)(!1&a||s>=a)&&Object.keys(i.O).every((function(e){return i.O[e](n[l])}))?n.splice(l--,1):(o=!1,a<s&&(s=a));if(o){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,s=n[0],o=n[1],l=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in o)i.o(o,r)&&(i.m[r]=o[r]);if(l)var u=l(i)}for(t&&t(n);c<s.length;c++)a=s[c],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(u)},n=self["webpackChunkpj1"]=self["webpackChunkpj1"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[504],(function(){return i(7379)}));n=i.O(n)})();
//# sourceMappingURL=app.869e107b.js.map