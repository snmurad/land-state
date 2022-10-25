
const PropertyModel = require('../models/property')

class Property{
    constructor(id, tid, area, rate, pType, cid)
    {
        this.id = id
        this.tid = tid
        this.area = area
        this.rate = rate
        this.totalAmount = this.area * this.rate
        this.pType = pType
        this.cid = cid
    }

    register()
    {
        const p = new PropertyModel({
            townId: this.tid,
            area: this.area,
            ratePerMarla: this.rate,
            totalAmount: this.rate,
            plotType: this.pType,
            cid: this.cid
        })
        p.save()
            .then((result) => {
                console.log("Property Added Successfully")
                console.log(result)
            })
            .catch((err) => {
                console.log("Property Adding Error Occured")
                console.log(err)
            })
    }
};

module.exports = Property