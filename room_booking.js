document.addEventListener("DOMContentLoaded", function() {
  fetchRooms();
});

function fetchRooms() {
  fetch("/api/rooms")
    .then(response => response.json())
    .then(data => {
      const roomList = document.getElementById("roomList");
      roomList.innerHTML = "";
      data.forEach(room => {
        const roomCard = document.createElement("div");
        roomCard.classList.add("room-card");
        roomCard.innerHTML = `
          <h3>${room.type}</h3>
          <p>${room.description}</p>
          <p>Price: $${room.price} per night</p>
          <button class="button" onclick="bookRoom(${room.id})">Book Now</button>
        `;
        roomList.appendChild(roomCard);
      });
    })
    .catch(error => console.error("Error fetching rooms:", error));
}

function bookRoom(roomId) {
  fetch(`/api/book/${roomId}`, { method: "POST" })
    .then(response => {
      if (response.ok) {
        alert("Room booked successfully!");
        fetchRooms(); // Refresh room list after booking
      } else {
        alert("Failed to book room. Please try again.");
      }
    })
    .catch(error => console.error("Error booking room:", error));
}
