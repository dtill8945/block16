const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

function subscriptionStatus()

function couponStatus()

function mainFunction(name){
    let subscriptionFunction = subscriptionStatus(name.pricePerRefill, name.refills, name.subscription)
    let couponFunction = couponStatus(name.pricePerRefill, name.refills, name.coupon, name.subscriptionTotal)
    console.log(subTotal)
}

mainFunction(timmy)
mainFunction(sarah)
mainFunction(rocky)