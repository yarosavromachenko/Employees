export const heightToSm = (height) => {
    let heightCm;
    let arrayOfStrings = height.split("'");
    let feet = arrayOfStrings[0];
    if (arrayOfStrings[1] !== null) {
        let arrayOfStrings2 = arrayOfStrings[1];
        let inches = arrayOfStrings2.split('"');
        heightCm = feet * 30.48 + inches[0] * 2.54;
    } else {
        heightCm = feet * 30.48;
    }
    let meter = Math.floor(heightCm / 100);
    let centimeter = Math.floor(heightCm - meter * 100);

    return meter + "м " + centimeter + "см";
}

export const parseDateToAge = (date) => {
    let today = new Date();
    let birthDate = new Date(date * 1000);
    let age = today.getFullYear() - birthDate.getFullYear();
    let month_dif = today.getMonth() - birthDate.getMonth();
    if ((month_dif < 0) || ((month_dif === 0) && (today.getDate() < birthDate.getDate()))) {
        age--;
    }
    return age;
}