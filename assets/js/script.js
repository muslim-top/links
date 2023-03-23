// for Hijri date
let currentIslamicDate = new Date(); // Gets the current date and time
    let formattedIslamicDate = currentIslamicDate.toLocaleDateString('ar-SA', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      calendar: 'islamic'
    });
    document.getElementById("current-islamic-date").innerHTML = formattedIslamicDate;
// /Hijri date
