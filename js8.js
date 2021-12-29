function rot13(message) {
    let ABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let root = "";
    let RoOt = "";
    if (message == message.toLowerCase()) {
        message = message.split("");
        for (let i = 0; i < message.length; i++) {
            let iNdEx = abc.indexOf(message[i]);
            if (iNdEx <= 13) {
                root += abc[iNdEx + 13];
            } else {
                let nnn = iNdEx - (13 - (26 - iNdEx));
                root += abc[iNdEx - nnn];
            }

        }
    } else {
        message = message.split("");
        let iNdEx = ABC.indexOf(message[0]);
        if (iNdEx <= 13) {
            RoOt += ABC[iNdEx + 13];
        } else {
            let nnn = iNdEx - (13 - (26 - iNdEx));
            RoOt += ABC[iNdEx - nnn];
        }
        //root = RoOt ;
        for (let i = 1; i < message.length; i++) {
            let iNdEx = abc.indexOf(message[i]);
            if (iNdEx <= 13) {
                root += abc[iNdEx + 13];
            } else {
                let nnn = iNdEx - (13 - (26 - iNdEx));
                root += abc[iNdEx - nnn];
            }


        }
        root = RoOt + root;

    }
    return root;
}