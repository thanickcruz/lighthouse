import React from 'react';
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

interface InsuranceOption {
    id: number;
    name: string;
    coverage: string;
    premium: string;
}

/*
[
    {
        "insurance": "Fidelis Care",
        "plan_name": "Ambetter from Fidelis Care Bronze, Bronze, ST, INN, Fidelis Care HBX Network, Dep25, Free Telemedicine, Pediatric Dental",
        "metal_level": "Bronze",
        "coverage_type": "Medical Plus Child Dental",
        "persons_convered": "Individual",
        "price_per_month": "$394.99"
    }
]
    
*/

let json_example = [
    {
        "insurance": "Fidelis Care",
        "plan_name": "Ambetter from Fidelis Care Bronze, Bronze, ST, INN, Fidelis Care HBX Network, Dep25, Free Telemedicine, Pediatric Dental",
        "metal_level": "Bronze",
        "coverage_type": "Medical Plus Child Dental",
        "persons_convered": "Individual",
        "price_per_month": "$394.99"
    },
    {
        "insurance": "Independent Health",
        "plan_name": "iDirect Bronze Coinsurance HSAQ Bronze NS OON IHC Network Marketplace Dep25",
        "metal_level": "Bronze",
        "coverage_type": "Medical",
        "persons_convered": "Individual",
        "price_per_month": "$496.57"
    },
    {
        "insurance": "Highmark Blue Cross Blue Shield",
        "plan_name": "IND POS 8000, Bronze, NS, OON, POS, Dep29, Pediatric Dental",
        "metal_level": "Bronze",
        "coverage_type": "Medical Plus Child Dental",
        "persons_convered": "Primary Subscriber And Dependent(S)",
        "price_per_month": "$807.81"
    }
]

const placeholderData = json_example.map((option, index) => {
    return {
        id: index + 1,
        name: option.insurance,
        plan_name: option.plan_name,
        metal_level: option.metal_level,
        coverage: option.coverage_type,
        premium: option.price_per_month
    };
}, []);

// const placeholderData: InsuranceOption[] = [
//     { id: 1, name: 'Fidelis Care', coverage: 'Medical Plus Child Dental', premium: '$394.99' },
//     { id: 2, name: 'Independent Health', coverage: 'Medical', premium: '$496.57' },
//     { id: 3, name: 'Highmark Blue Cross Blue Shield', coverage: 'Medical Plus Child Dental', premium: '$807.81' },
// ];

const InsuranceOptions: React.FC = () => {
    return (
        <Container
            maxWidth={false}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                width: '100vw',
                backgroundColor: '#add8e6', 
                textAlign: 'center',
                color: '#fff', 
            }}
        >
            <Typography variant="h4" component="h1" gutterBottom sx={{ marginBottom: '1rem' }}>
                Insurance Options
            </Typography>
            <TableContainer component={Paper} sx={{ width: '90%', maxWidth: '800px', backgroundColor: '#fff' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Coverage</TableCell>
                            <TableCell>Premium</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {placeholderData.map(option => (
                            <TableRow key={option.id}>
                                <TableCell>{option.id}</TableCell>
                                <TableCell>{option.plan_name}</TableCell>
                                <TableCell>{option.name}</TableCell>
                                <TableCell>{option.coverage}</TableCell>
                                <TableCell>{option.premium}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default InsuranceOptions;