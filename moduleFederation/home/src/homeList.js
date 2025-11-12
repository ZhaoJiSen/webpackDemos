const homeList = (count) => {
    let str = `<ul>`

    for (let i = 0; i < count; i++) {
        str += `<li> item ${i}</li>`
    }

    str += `</ul>`

    return str
}

export default homeList

