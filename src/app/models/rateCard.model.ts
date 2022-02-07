export class RateCard {
    uniqueId: string;
    billingCode: string;
    childRateCardIds: string[];
    name: string;
    group1: string;
    group2: string;
    group3: string;
    longDesc: string;
    type: string;
    inputValidation: InputValidation[];
    monthlyHours: number;
    maxGhz:number;
    normMetric: number;
    padu: string;
    rate:number;
    rules: string;
    service: string;
    serviceCat: string;
    serviceName: string;
    shortDesc: string;
    unitMeasure: string;
    utilization:number;
    year: string;
}

export class InputValidation{
    paramName: string;
    inputValues: string[];
    label: string;
    min: number;
    max: number;
}