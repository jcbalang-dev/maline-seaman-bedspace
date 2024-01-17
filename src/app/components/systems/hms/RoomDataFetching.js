import axios from "axios";

const fetchRoomData = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:5001/rooms");
    const roomData = response.data.rooms;

    if (Array.isArray(roomData)) {
      const codes = roomData.map((room) => room.code);
      return codes;
    } else {
      console.error("Invalid room data format:", roomData);
      return [];
    }
  } catch (error) {
    console.error("Error fetching room data:", error);
    return [];
  }
};

export default fetchRoomData;
