export const getdats = ((data, locationname, locationtype)=>{
    return data.filter((destinations)=>{
            return destinations[locationtype].toLowerCase() === locationname.toLowerCase()
        })
})