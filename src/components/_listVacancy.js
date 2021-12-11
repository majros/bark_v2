function createData( key, position, shipType, dwt, salary, duration, joinDate, additionalInfo) {
    key += 1;
    return { key, position, shipType, dwt, salary, duration, joinDate, additionalInfo };
}

export const rows = [
    createData('1', '2nd Engineer', 'Reefer', 12900, 7350, 5, '09/Aug/2021', 'Engine Type: MAN B&W HITACHI ZOSEN 8S50MC-C, ' +
        '12622 KW Reefer 390 TEU (including 185 REF C). 2 cranes X 40T SWL. 2 cranes X 12T SWL. Mixed crew. US visa is ' +
        'mandatory.'),
];