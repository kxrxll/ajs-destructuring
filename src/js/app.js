const getSpecials = (obj) => {
  const resultArr = [];
  const specialsArr = obj.special;
  specialsArr.forEach((element) => {
    const specialToPush = {};
    const {
      id,
      name,
      icon,
      description = 'Описание недоступно',
    } = element;
    specialToPush.id = id;
    specialToPush.name = name;
    specialToPush.icon = icon;
    specialToPush.description = description;
    resultArr.push(specialToPush);
  });
  return resultArr;
};

export default getSpecials;
