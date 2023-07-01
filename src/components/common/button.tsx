'use client';
import { Button, ButtonProps } from '@mui/material';
import React from 'react';

type CustomButtonProps = ButtonProps & {
  onClick?: () => void;
  children: React.ReactNode;
  color?: string;
};

const CustomButton = ({ children, onClick, color, ...props }: CustomButtonProps) => {
  return (
    <Button onClick={onClick} {...props} sx={{ background: color }}>
      {children}
    </Button>
  );
};

export default CustomButton;
