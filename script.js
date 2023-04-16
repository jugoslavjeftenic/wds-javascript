const pearson = {
    name: "Kyle",
    friend: {
        name: "Joe",
        friend: {
            name: "Sally",
            friend: {
                name: "Bomba"
            }
        }
    }
};

printNames(pearson);

function printNames(passedPearson) {
    if (passedPearson === null) return;
    console.log(passedPearson.name);
    printNames(passedPearson.friend);
}
