class UserDTO {
  constructor(user) {
    this.username = user.username;
    this.firstName = user.first_name;
    this.lastName = user.last_name;
    this.age = user.age;
    this.email = user.email;
  }
}

export default UserDTO;
