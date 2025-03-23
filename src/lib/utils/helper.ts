export default function displayTotalRoom(count: number) {
    return count <= 1 ? `${count} room` : `${count} rooms`;
}