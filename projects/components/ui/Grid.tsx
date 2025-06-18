import React from 'react';
import styles from './Grid.module.css';

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

interface RowProps {
  children: React.ReactNode;
  gap?: 'none' | 'sm' | 'md' | 'lg';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  className?: string;
}

interface ColProps {
  children: React.ReactNode;
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  offset?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = 'lg',
  className = ''
}) => {
  const containerClasses = [
    styles.container,
    styles[`max-${maxWidth}`],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
};

const Row: React.FC<RowProps> = ({
  children,
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  className = ''
}) => {
  const rowClasses = [
    styles.row,
    styles[`gap-${gap}`],
    styles[`align-${align}`],
    styles[`justify-${justify}`],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={rowClasses}>
      {children}
    </div>
  );
};

const Col: React.FC<ColProps> = ({
  children,
  span = 12,
  sm,
  md,
  lg,
  xl,
  offset,
  className = ''
}) => {
  const colClasses = [
    styles.col,
    styles[`col-${span}`],
    sm ? styles[`col-sm-${sm}`] : '',
    md ? styles[`col-md-${md}`] : '',
    lg ? styles[`col-lg-${lg}`] : '',
    xl ? styles[`col-xl-${xl}`] : '',
    offset ? styles[`offset-${offset}`] : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={colClasses}>
      {children}
    </div>
  );
};

const Grid = {
  Container,
  Row,
  Col
};

export default Grid;