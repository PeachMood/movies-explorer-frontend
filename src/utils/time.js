export const getCurrentYear = () => {
  return new Date().getFullYear();
}

export const getAge = (birthday) => {
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export const getDeclination = (age) => {
  const titles = [' год', ' года', ' лет'];
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[(age % 100 > 4 && age % 100 < 20) ? 2 : cases[(age % 10 < 5) ? age % 10 : 5]];
}

export const getTime = (duration) => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration - hours * 3600) / 60);
  return `${hours}ч ${minutes}м`;
};
