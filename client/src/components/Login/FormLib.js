import { useField } from 'formik';
import {
    FormInput,
    FormLabel,
    FormIcon,
    FormErrorMsg,
} from './LoginElements'

export const TextInput = ({icon, ...props}) => {
    const [field, input] = useField(props);

    const iconStyle = {
        position: "relative",
    }

    return (
        <div style={iconStyle}>
            <FormLabel htlmFor={props.name}>
                {props.label}
            </FormLabel>
            <FormInput
            invalid={input.touched && input.error}
                {...field}
                {...props}
            />
            <FormIcon>
                {icon}
            </FormIcon>

            {input.touched && input.error ? (
                <FormErrorMsg>
                    {input.error}
                </FormErrorMsg> ) : (
                <FormErrorMsg style={{visibility: "hidden"}}>
                </FormErrorMsg> 
            )}
        </div>
    )
}