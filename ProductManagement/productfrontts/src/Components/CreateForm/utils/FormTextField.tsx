import TextField from "@mui/material/TextField";
import React from "react";

interface FormularyTextFieldProps {
    label: string;
    type: string;
    value: string;
    onChangeform: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormularyTextField: React.FC<FormularyTextFieldProps> = ({
    label,
    type,
    value,
    onChangeform
}) => {
    return (
        <TextField className="p-5"
            type={type}
            variant="outlined"
            color="secondary"
            label={label}
            onChange={onChangeform}
            value={value}
            fullWidth
            required
        />
    );
};

export default FormularyTextField;
