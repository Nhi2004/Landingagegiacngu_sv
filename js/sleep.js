function calculateSleepTimes() {
  const wakeupTime = document.getElementById("wakeup-time").value;
  const [hour, minute] = wakeupTime.split(":").map(Number);

  if (
    isNaN(hour) ||
    isNaN(minute) ||
    hour < 0 ||
    hour > 23 ||
    minute < 0 ||
    minute > 59
  ) {
    document.getElementById("result").innerHTML =
      "<p>Thời gian nhập không hợp lệ. Vui lòng nhập lại.</p>";
    return;
  }

  console.log("Hé lu cuộc đời")
  const sleepTimes = getSleepTimes(wakeupTime);

  let resultHTML = "<h3>Thời gian nên đi ngủ:</h3>";
  for (let i = 0; i < sleepTimes.length; i++) {
    if (sleepTimes[i] !== null) {
      resultHTML += `<p>Chu kỳ ${i + 3}: ${sleepTimes[i]}</p>`;
    }
  }

  document.getElementById("result").innerHTML = resultHTML;
}

function getSleepTimes(wakeupTime) {
  const [wakeupHour, wakeupMinute] = wakeupTime.split(':').map(Number);
  const totalMinutes = wakeupHour * 60 + wakeupMinute;
  const sleepTimes = [];

  for (let i = 4; i <= 7; i++) {
    const sleepMinutes = totalMinutes - (90 * (i - 1));
    let sleepHour, sleepMinute;

    if (sleepMinutes < 0) {
      // Nếu thời gian ngủ nằm trong ngày hôm trước
      sleepHour = (24 + Math.floor(sleepMinutes / 60)) % 24;
      sleepMinute = (sleepMinutes % 60 + 60) % 60;
    } else {
      sleepHour = Math.floor(sleepMinutes / 60);
      sleepMinute = sleepMinutes % 60;
    }

    const sleepTimeString = `${sleepHour.toString().padStart(2, '0')}:${sleepMinute.toString().padStart(2, '0')}`;
    sleepTimes.push(sleepTimeString);
  }

  return sleepTimes;
}

