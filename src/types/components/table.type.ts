import React from 'react';

export type TableType = {
  className?: string;
  head?: React.ReactNode;
  children: React.ReactNode;
};

export type TableColType = {
  colspan?: number;
  rowspan?: number;
  className?: string;
  children: React.ReactNode;
};

export type ContentElementProps = {
  className?: string;
  children: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
