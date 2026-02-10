export class User {
  /**
   *
   * @param {Like<User>} userDataLike
   */
  constructor({ id, isActive, avatar, balance, first_name, last_name, gender }) {
    this.id = id
    this.isActive = isActive
    this.balance = balance
    this.avatar = avatar
    this.first_name = first_name
    this.last_name = last_name
    this.gender = gender
  }
}
