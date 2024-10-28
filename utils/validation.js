const validation = {
    existsOrError: (value, msg) => {
        if(!value) throw msg
    
        if(Array.isArray(value) && value.length === 0) throw msg
        if(typeof value === 'string' && !value.trim()) throw msg
    },
    
    notExistsOrError: (value, msg) => {
            if (value.length > 0) throw msg
        
    },
    
    equalsOrError: (valueA, valueB, msg) => {
        if(valueA !== valueB) throw msg
    }
}

module.exports = validation