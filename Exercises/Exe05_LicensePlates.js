// let platePatterns01 = ["AA-00-00", "AA-00-AA"];
        // let platePatterns02 = ["00-00-AA", "00-AA-00"];

        let plate = "DF-11-7D";

        function checkPlatePattern(plate, index) {
            if (plate.charCodeAt(index) >= 65 && plate.charCodeAt(index) <= 90) {
                return "letter";
            }
            else if (plate.charCodeAt(index) >= 48 && plate.charCodeAt(index) <= 57) {
                return "number";
            }
            else {
                return false;
            }
        }

        function checkPlateSeparator(plate, index) {
            if ((plate[index] === "-" && plate[index + 3] === "-") || (plate[index] === " " && plate[index + 3] === " ")) {
                return true;
            }
            else {
                return false;
            }
        }

        if (checkPlatePattern(plate, 0) == "letter") {
            if (checkPlatePattern(plate, 1) == "letter") {
                for (let i = 2; i < 8; i++) {
                    if (i == 2) {
                        if (checkPlateSeparator(plate, i)) {
                            continue;
                        }
                        console.log(`Both separators must be either a space or a dash.`);
                        break;
                    }
                    else if (i == 3) {
                        if (checkPlatePattern(plate, i) == "number") {
                            if (checkPlatePattern(plate, i + 1) == "number") {
                                i += 1;
                                continue;
                            }
                        }
                        console.log(`Plate character /"${plate[i]}"/ invalid.`);
                        break;
                    }
                    else {
                        if (checkPlatePattern(plate, i) == "letter") {
                            if (checkPlatePattern(plate, i++) == "letter") {
                                i += 1;
                                console.log(`License plate ${plate} successfully validated`);
                                break;
                            }
                            console.log(`Plate character /"${plate[i]}"/ invalid.`);
                            break;
                        }
                        else if (checkPlatePattern(plate, i) == "number") {
                            if (checkPlatePattern(plate, i + 1) == "number") {
                                i += 1;
                                console.log(`License plate ${plate} successfully validated`);
                                break;
                            }
                            console.log(`Plate character \"${plate[i]}"\ invalid.`);
                            break;
                        }
                        else {
                            console.log(`Plate character /"${plate[i]}"/ invalid.`);
                            break;
                        }
                    }
                }   
            }
            else {
                console.log("The second character must be a letter");
            }
        }
        else if (checkPlatePattern(plate, 0) == "number") {
            if (checkPlatePattern(plate, 1) == "number") {
                for (let i = 2; i < 8; i++) {
                    if (i == 2) {
                        if (checkPlateSeparator(plate, i)) {
                            continue;
                        }
                        console.log(`Both separators must be either a space or a dash.`);
                        break;
                    }
                    else {
                        if (checkPlatePattern(plate, i) == "letter") {
                            if (checkPlatePattern(plate, i++) == "letter") {
                                i += 1;
                                if (i == 8) {
                                    console.log(`License plate ${plate} successfully validated`);
                                    break;
                                }
                                continue;
                            }
                            console.log(`Plate character /"${plate[i]}"/ invalid.`);
                            break;
                        }
                        else if (checkPlatePattern(plate, i) == "number") {
                            if (checkPlatePattern(plate, i++) == "number") {
                                i += 1;
                                if (i == 8) {
                                    console.log(`License plate ${plate} successfully validated`);
                                    break;
                                }
                                continue;
                            }
                            console.log(`Plate character /"${plate[i]}"/ invalid.`);
                            break;
                        }
                        else {
                            console.log(`Plate character /"${plate[i]}"/ invalid.`);
                            break;
                        }
                    }
                }    
            }
            else {
                console.log("The second character must be a number");
            }
        }
        else {
            console.log("The two first characters must be either letters or numbers");
        }