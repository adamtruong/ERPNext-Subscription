/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlanCreateFormInputValues = {
    Id?: string;
    Company_Name?: string;
    Types?: string;
    Next_Payment_Date?: string;
    Ec2_IP_Address?: string;
    Payment_Status?: string;
};
export declare type PlanCreateFormValidationValues = {
    Id?: ValidationFunction<string>;
    Company_Name?: ValidationFunction<string>;
    Types?: ValidationFunction<string>;
    Next_Payment_Date?: ValidationFunction<string>;
    Ec2_IP_Address?: ValidationFunction<string>;
    Payment_Status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlanCreateFormOverridesProps = {
    PlanCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Id?: PrimitiveOverrideProps<TextFieldProps>;
    Company_Name?: PrimitiveOverrideProps<TextFieldProps>;
    Types?: PrimitiveOverrideProps<TextFieldProps>;
    Next_Payment_Date?: PrimitiveOverrideProps<TextFieldProps>;
    Ec2_IP_Address?: PrimitiveOverrideProps<TextFieldProps>;
    Payment_Status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlanCreateFormProps = React.PropsWithChildren<{
    overrides?: PlanCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PlanCreateFormInputValues) => PlanCreateFormInputValues;
    onSuccess?: (fields: PlanCreateFormInputValues) => void;
    onError?: (fields: PlanCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlanCreateFormInputValues) => PlanCreateFormInputValues;
    onValidate?: PlanCreateFormValidationValues;
} & React.CSSProperties>;
export default function PlanCreateForm(props: PlanCreateFormProps): React.ReactElement;
