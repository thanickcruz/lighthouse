import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FormField } from './FormField';
import { useStyles } from './Form.styles';
import { SelectChangeEvent } from '@mui/material/Select';

const Form: React.FC = () => {
  const [coverage, setCoverage] = useState('');
  const [coverageType, setCoverageType] = useState('');
  const [maxPayment, setMaxPayment] = useState('');

  const navigate = useNavigate();
  const styles = useStyles();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Coverage:', coverage);
    console.log('Coverage Type:', coverageType);
    console.log('Max Payment:', maxPayment);
    
    navigate('/insurance-options');
  };

  const handleMaxPaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const regex = /^\d+(\.\d{0,2})?$/;
    if (regex.test(value) || value === '') {
      setMaxPayment(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <FormField
        label="Who should be covered under the insurance?"
        value={coverage}
        onChange={(e: SelectChangeEvent<string>) => setCoverage(e.target.value as string)}
        options={[
          { value: '', label: 'Select an option' },
          { value: 'individual', label: 'Individual' },
          { value: 'childOnly', label: 'Child Only' },
          { value: 'parentAndChild', label: 'Parent and Child' },
          { value: 'couple', label: 'Couple' },
          { value: 'family', label: 'Family' },
        ]}
      />
      <FormField
        label="Type of coverage"
        value={coverageType}
        onChange={(e: SelectChangeEvent<string>) => setCoverageType(e.target.value as string)}
        options={[
          { value: '', label: 'Select an option' },
          { value: 'dental', label: 'Dental' },
          { value: 'medical', label: 'Medical' },
          { value: 'adultDental', label: 'Medical + Adult Dental' },
        ]}
      />
      <TextField
        fullWidth
        sx={{ marginBottom: '1rem', backgroundColor: '#fff' }}
        label="Maximum payments you can make per month ($)"
        id="maxPayment"
        value={maxPayment}
        onChange={handleMaxPaymentChange}
        placeholder="e.g., 100.00"
        required
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          padding: '10px 20px',
          fontSize: '1rem',
          borderRadius: '5px',
          backgroundColor: '#007bff',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#0056b3',
          },
        }}
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
