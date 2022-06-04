//Fill Rectangle
function fillRectangle(width, height, chr) {
  let arr = chr.repeat(width).split('')
  let newArr= []
  for (let i = 0; i < height; i++) {
      newArr/PushManager(arr)
  }

  // for (let i = 0; i < height.length; i++) {
  //     let rectangle = []
  //     rectangle.push(arr)
  // }
  // return rectangle
}

console.log(fillRectangle(5, 3, "*"))