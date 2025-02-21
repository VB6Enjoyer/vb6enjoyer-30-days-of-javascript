try {
    let rnd = Math.round(Math.random());
    let mightBeNull;
    ;
    if (rnd == 1) {
        mightBeNull = null;
    } else {
        mightBeNull = false;
    }

    mightBeNull.valueOf()
} catch (err) {
    throw new Error("It IS null, dumbass.");
} finally {
    console.warn("Do NOT pass null values through code, dumbass!");
}

try {
    let num = 10;
    let sum = num + num2;
} catch (err) {
    throw err;
} finally {
    try {
        let sum = num + 12;
        console.log(sum);
    } catch (err) {
        console.error(err);
    } finally {
        console.log("I'm done trying this :(");
    }
}

