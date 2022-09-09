const url = `http://api.aladhan.com/v1/timingsByCity?city=Katy&country=United States&method=2`

    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.data.date.timestamp)

        let date = data.data.date.readable
        let Fajr = data.data.timings.Fajr
        let Dhur = data.data.timings.Dhuhr
        let Asr = data.data.timings.Asr
        let Maghrib = data.data.timings.Maghrib
        let Isha = data.data.timings.Isha
        console.log(Fajr)

        // current time of hours and minutes
        let d = new Date()
        let hou = d.getHours()
        let mi = d.getMinutes()
        cur = hou + ":" + mi

        console.log(cur)
        console.log(Maghrib)

        if (Maghrib >= cur){
          console.log("Maghrib hasn't Passed")
        }else if(Maghrib >= Fajr){
          console.log("Maghrib has passed")
        }

        // console.log(Fajr + Dhur + Asr + Maghrib + Isha)

        function timeConverter(prayer){
            let time = prayer; // your input
            // console.log(prayer)
            time = time.split(':'); // convert to array
           
            // fetch
            let hours = Number(time[0])
            let minutes = Number(time[1])

            // calculate
            let timeValue;

            if (hours > 0 && hours <= 12) {
            timeValue= "" + hours;
            } else if (hours > 12) {
            timeValue= "" + (hours - 12);
            } else if (hours == 0) {
            timeValue= "12";
            }
            
            timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
            timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM

            // show
        
            // console.log(timeValue);
            return timeValue
        }
       

        // compares the current time to the prayer time to check whats the current prayer time is
        if (cur <= Fajr || cur >= Isha){ //cur 0:00 fajr 06:00 dhur 13:00
          console.log("Fajr hasn't Passed")
          document.querySelector('#currentSalat').innerHTML += 'Fajr @ '+ '<br>' + timeConverter(Fajr)
        }else if(cur <= Dhur){
          console.log("Maghrib has passed")
          document.querySelector('#currentSalat').innerHTML += 'Dhur @ ' + '<br>' + timeConverter(Dhur)
        }else if(cur <= Asr){
          console.log("Maghrib has passed")
          document.querySelector('#currentSalat').innerHTML += 'Asr @ ' + '<br>' + timeConverter(Asr)
        }else if(cur <= Maghrib){
          console.log("Maghrib has passed")
          document.querySelector('#currentSalat').innerHTML += 'Maghrib @ ' + '<br>' + timeConverter(Maghrib)
        }else if(cur <= Isha){
          console.log("Maghrib has passed")
          document.querySelector('#currentSalat').innerHTML += 'Isha @ ' + '<br>' + timeConverter(Isha)
        }


        // document.querySelector('#date').textContent += date
        document.querySelector('#fajr').innerHTML += timeConverter(Fajr)
        document.querySelector('#dhur').innerHTML += timeConverter(Dhur)
        document.querySelector('#asr').innerHTML += timeConverter(Asr)
        document.querySelector('#maghrib').innerHTML += timeConverter(Maghrib)
        document.querySelector('#isha').innerHTML += timeConverter(Isha)

      })
      .catch(err => {
          console.log(`error ${err}`)
      });


function display_ct7() {
let x = new Date()
// console.log(x)
// console.log(x.getTime())
let ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
hours = x.getHours( ) % 12;
hours = hours ? hours : 12;
hours=hours.toString().length==1? 0+hours.toString() : hours;


let minutes=x.getMinutes().toString()
minutes=minutes.length==1 ? 0+minutes : minutes;

let seconds=x.getSeconds().toString()
seconds=seconds.length==1 ? 0+seconds : seconds;

let month=(x.getMonth() +1).toString();
month=month.length==1 ? 0+month : month;

let dt=x.getDate().toString();
dt=dt.length==1 ? 0+dt : dt;

let x2=month + "/" + dt + "/" + x.getFullYear(); 
let x1 = hours + ":" +  minutes + ":" +  seconds + " " + ampm;
document.getElementById('ct7').innerHTML = x1;
document.getElementById('date').innerHTML = x2
display_c7();
 }
 function display_c7(){
var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('display_ct7()',refresh)
}
display_c7()