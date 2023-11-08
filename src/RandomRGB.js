const randomRGB = () => {
   const randomInt = (min, max) =>
      min + Math.floor(Math.random() * (max - min + 1));

   const red = randomInt(0, 255);
   const green = randomInt(0, 255);
   const blue = randomInt(0, 255);

   return `rgb(${red}, ${green}, ${blue}`;
};

export default randomRGB;
