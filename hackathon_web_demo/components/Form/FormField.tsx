import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: { value: string; label: string }[];
}

export const FormField: React.FC<FormFieldProps> = ({ label, value, onChange, options }) => {
  return (
    <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={onChange}
        required
        sx={{ backgroundColor: 'white' }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
