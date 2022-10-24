import { FC, InputHTMLAttributes } from "react";

import { FormInputLabel, Input, Group } from "./form-input.styles";

export type FormInputProps = {
    label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
    return(
        <Group>
            {label && (
                <FormInputLabel
                    shrink={Boolean(
                        otherProps.value &&
                        typeof otherProps.value === 'string' &&
                        otherProps.value.length
                    )}
                >
                    {label}
                </FormInputLabel>
            )}
            <Input {...otherProps} />
        </Group>
    )
}

export default FormInput;