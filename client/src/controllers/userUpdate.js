async function UserUpdate(userId) {
  const response = await fetch("http://localhost:5000/users/id/" + userId);
  const data = await response.json();
  console.log(data);
  return data;
}

export default UserUpdate;
