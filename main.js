const url = `http://api.aladhan.com/v1/timingsByCity?city=Katy&country=United States&method=2`

    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.data.date.readable)

        let date = data.data.date.readable
        let Fajr = data.data.timings.Fajr
        let Dhur = data.data.timings.Dhuhr
        let Asr = data.data.timings.Asr
        let Maghrib = data.data.timings.Maghrib
        let Isha = data.data.timings.Isha
        
        console.log(Fajr + Dhur + Asr + Maghrib + Isha)

        function timeConverter(prayer){
            let time = prayer; // your input

            time = time.split(':'); // convert to array
            console.log (time)
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
        
            console.log(timeValue);
            return timeValue
        }

        document.querySelector('#date').textContent += date
        document.querySelector('#fajr').textContent += timeConverter(Fajr)
        document.querySelector('#dhur').textContent += timeConverter(Dhur)
        document.querySelector('#asr').textContent += timeConverter(Asr)
        document.querySelector('#maghrib').textContent += timeConverter(Maghrib)
        document.querySelector('#isha').textContent += timeConverter(Isha)

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
