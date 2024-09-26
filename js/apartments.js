function filterRooms() {
  const maxPrice = document.getElementById("priceFilter").value;
  const rooms = document.querySelectorAll(".room-card");

  rooms.forEach((room) => {
    const roomPrice = parseInt(room.getAttribute("data-price"), 10);

    // Show room if its price is within the selected price range or show all rooms if 'all' is selected
    if (maxPrice === "all" || roomPrice <= parseInt(maxPrice)) {
      room.parentElement.style.display = "block";
    } else {
      room.parentElement.style.display = "none";
    }
  });
}
