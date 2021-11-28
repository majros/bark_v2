let key = 0;
function createData( key, position, shipType, dwt, salary, duration, joinDate, additionalInfo) {
    key += 1;
    return { key, position, shipType, dwt, salary, duration, joinDate, additionalInfo };
}

export const rows = [
    createData('1', '2nd Engineer', 'Reefer', 12900, 7350, 5, '09/Aug/2021', 'Engine Type: MAN B&W HITACHI ZOSEN 8S50MC-C, ' +
        '12622 KW Reefer 390 TEU (including 185 REF C). 2 cranes X 40T SWL. 2 cranes X 12T SWL. Mixed crew. US visa is ' +
        'mandatory.'),
    createData('2', '3rd Officer', 'Oil chemical tanker', 17462, 4000, 5, '16/Aug/2021', 'Engine Type: MAN B&W 6s35MC MK7' +
        'We are looking for experienced full crew for two chemical tankers, trading Chem Products. Similar previous ' +
        'experience is a MUST Russian speaking crew'),
    createData('3', '2nd Engineer', 'Reefer', 12900, 7350, 5, '09/Aug/2021', 'Engine Type: MAN B&W HITACHI ZOSEN 8S50MC-C, ' +
        '12622 KW Reefer 390 TEU (including 185 REF C). 2 cranes X 40T SWL. 2 cranes X 12T SWL. Mixed crew. US visa is ' +
        'mandatory.'),
    createData('4', '2nd Engineer', 'Reefer', 12900, 7350, 5, '09/Aug/2021', 'Engine Type: MAN B&W HITACHI ZOSEN 8S50MC-C, ' +
        '12622 KW Reefer 390 TEU (including 185 REF C). 2 cranes X 40T SWL. 2 cranes X 12T SWL. Mixed crew. US visa is ' +
        'mandatory.'),
    createData('5', '3nd Engineer', 'Car carrier', 6000, 8000, 2, '10/Aug/2021', 'Engine Type: 2 X MAN B&W 9L 40/45 4 ' +
        'STROKE 9 CYLINDER, 12960KW Roll on/roll off, car carrier. 15224 GRT. Wage in Euro. Contract duration 8 weeks ' +
        'on / 8 weeks off. Car Carrier experience required. US visa is mandatory.'),
    createData('6', '2nd Engineer', 'Reefer', 12900, 7350, 5, '09/Aug/2021', 'Engine Type: MAN B&W HITACHI ZOSEN 8S50MC-C, ' +
        '12622 KW Reefer 390 TEU (including 185 REF C). 2 cranes X 40T SWL. 2 cranes X 12T SWL. Mixed crew. US visa is ' +
        'mandatory.'),
    createData('7', '2nd Engineer', 'Reefer', 12900, 7350, 5, '09/Aug/2021', 'Engine Type: MAN B&W HITACHI ZOSEN 8S50MC-C, ' +
        '12622 KW Reefer 390 TEU (including 185 REF C). 2 cranes X 40T SWL. 2 cranes X 12T SWL. Mixed crew. US visa is ' +
        'mandatory.'),
    createData('8', '3nd Engineer', 'Car carrier', 6000, 8000, 2, '10/Aug/2021', 'Engine Type: 2 X MAN B&W 9L 40/45 4 ' +
        'STROKE 9 CYLINDER, 12960KW Roll on/roll off, car carrier. 15224 GRT. Wage in Euro. Contract duration 8 weeks ' +
        'on / 8 weeks off. Car Carrier experience required. US visa is mandatory.'),
    createData('9', '2nd Engineer', 'Reefer', 12900, 7350, 5, '09/Aug/2021', 'Engine Type: MAN B&W HITACHI ZOSEN 8S50MC-C, ' +
        '12622 KW Reefer 390 TEU (including 185 REF C). 2 cranes X 40T SWL. 2 cranes X 12T SWL. Mixed crew. US visa is ' +
        'mandatory.'),
];