let currentIslamicDate = new Date(2023, 2, 21); // Note: month is 0-based index, so March is 2
let formattedIslamicDate = currentIslamicDate.toLocaleDateString('ar-SA', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  calendar: 'islamic'
});
document.getElementById("current-islamic-date").innerHTML = formattedIslamicDate;
