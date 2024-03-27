//!Flyweight
//!Middleweight
//!Heavyweigh


async function getUserInfo(userIds) {
  const userInfo = [];
  for (const userId of userIds) {
    try {
      const user = await fetchUser(userId);
      userInfo.push(user);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return userInfo;
}

// Uso de la función
async function example() {
  const userIds = [1, 2, 3];
  const users = await getUserInfo(userIds);
  console.log('Users:', users);
}

example();

