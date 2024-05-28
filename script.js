<script>
    // Функція для відображення розкладу на сторінці
    function displaySchedule(schedule) {
        const scheduleDiv = document.getElementById('schedule');
        scheduleDiv.innerHTML = `
            <p><strong>Group Name:</strong> ${schedule.groupName}</p>
            <p><strong>Lesson Number:</strong> ${schedule.lessonNumber}</p>
            <p><strong>Subject:</strong> ${schedule.subject}</p>
            <p><strong>Teacher:</strong> ${schedule.teacher}</p>
            <p><strong>Type of Lesson:</strong> ${schedule.typeLesson}</p>
            <p><strong>Location:</strong> ${schedule.location}</p>
            <p><strong>Day of Week:</strong> ${schedule.dayOfWeek}</p>
            <p><strong>Start Time:</strong> ${schedule.startTime}</p>
        `;
    }

    // Запит до бекенду API
    fetch('URL_ДО_API')
        .then(response => response.json()) // Перетворення відповіді на JSON
        .then(data => displaySchedule(data)) // Відображення розкладу на сторінці
        .catch(error => console.error('Error fetching schedule:', error)); // Обробка помилок
</script>
