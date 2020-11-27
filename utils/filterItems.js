

async function filterItems(db){
    console.log("filterItems fired!")

    let items = await db.Item.find()

        let sports = items.filter(i=>i.itemtype === "sports")
        let electronics = items.filter(i=>i.itemtype === "electronics")
        let furniture = items.filter(i=>i.itemtype === "furniture")
        let food = items.filter(i=>i.itemtype === "food")
        let tools= items.filter(i=>i.itemtype === "tools")
    

        // console.log(sports,electronics,furniture,food,tools)

    return {sports,electronics,furniture,food,tools}
}

 module.exports = filterItems;