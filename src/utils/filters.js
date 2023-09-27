export function filterPerName(data , name , pow) {
 if (!pow) return data.filter((sample) => sample.name.includes(name)  )
 if (!name) return data.filter((sample) => sample.power >= pow  )
 return data.filter((sample) => sample.power >= pow && sample.name.includes(name) )

}

